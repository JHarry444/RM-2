import { act, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import TrainerContainer from "./TrainerContainer";

vi.mock("../inverse/TrainerForm", () => ({
    default: () => <div data-testid="trainer-form">Mock Trainer Form</div>,
}));

vi.mock("../inverse/TrainerList", () => ({
    default: ({ trainers }: { trainers: Array<{ id?: number }> }) => (
        <div data-testid="trainer-count">{trainers.length}</div>
    ),
}));

describe("TrainerContainer", () => {
    const fetchMock = vi.fn();

    beforeEach(() => {
        fetchMock.mockResolvedValue({
            json: async () => [
                { id: 1, name: "Jane", age: 31, specialty: "React" },
                { id: 2, name: "John", age: 34, specialty: "Node" },
            ],
        });
        vi.stubGlobal("fetch", fetchMock);
    });

    afterEach(() => {
        vi.clearAllMocks();
        vi.unstubAllGlobals();
    });

    it("renders heading and child components", async () => {
        render(<TrainerContainer />);

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledTimes(1);
        });

        expect(screen.getByText("Trainer Container")).toBeInTheDocument();
        expect(screen.getByTestId("trainer-form")).toBeInTheDocument();
        expect(screen.getByTestId("trainer-count")).toBeInTheDocument();
    });

    it("fetches trainers on mount and passes data to list", async () => {
        render(<TrainerContainer />);

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledWith("http://localhost:8080/trainers");
            expect(screen.getByTestId("trainer-count")).toHaveTextContent("2");
        });
    });

    it("fetches trainers again every 5 seconds", async () => {
        vi.useFakeTimers();
        render(<TrainerContainer />);

        await act(async () => {
            await Promise.resolve();
        });

        expect(fetchMock).toHaveBeenCalledTimes(1);

        await act(async () => {
            vi.advanceTimersByTime(5_000);
            await Promise.resolve();
        });

        expect(fetchMock).toHaveBeenCalledTimes(2);
        vi.useRealTimers();
    });

    it("clears interval on unmount", () => {
        const setIntervalSpy = vi.spyOn(globalThis, "setInterval");
        const clearIntervalSpy = vi.spyOn(globalThis, "clearInterval");
        const { unmount } = render(<TrainerContainer />);

        const intervalId = setIntervalSpy.mock.results[0]?.value;

        unmount();

        expect(clearIntervalSpy).toHaveBeenCalledWith(intervalId);
    });
});
