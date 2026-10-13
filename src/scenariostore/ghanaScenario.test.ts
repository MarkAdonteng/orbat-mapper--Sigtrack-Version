import { beforeEach, describe, expect, it, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import ghanaScenario from "../../public/scenarios/op-saaguga-gugda.json";
import { useNewScenarioStore } from "./newScenarioStore";
import { useScenarioTime } from "./time";
import { useScenario } from "./index";
import type { Scenario } from "@/types/scenarioModels";
import "@/dayjs";

vi.mock("@/composables/notifications", () => ({
  useNotifications: () => ({ send: vi.fn() }),
}));

function loadFixture(): Scenario {
  return JSON.parse(JSON.stringify(ghanaScenario)) as Scenario;
}

describe("OP SAAGUGA GUGDA shared scenario", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.restoreAllMocks();
  });

  it("loads all service elements, relief sites and timeline movements", () => {
    const store = useNewScenarioStore(loadFixture());
    const time = useScenarioTime(store);
    expect(store.state.info.name).toBe("OP SAAGUGA GUGDA");
    expect(store.state.info.timeZone).toBe("Africa/Accra");
    expect(Object.keys(store.state.sideGroupMap)).toHaveLength(4);
    expect(Object.keys(store.state.unitMap)).toHaveLength(14);
    expect(Object.keys(store.state.layerItemMap)).toHaveLength(5);
    expect(store.state.events).toHaveLength(5);
    time.setCurrentTime(Date.parse("2026-10-13T10:00:00Z"));
    expect(store.state.unitMap["gh-rescue-alpha"]!._state?.location).toEqual([
      0.085, 6.045,
    ]);
    expect(store.state.unitMap["gh-boat-alpha"]!._state?.location).toEqual([0.1, 6.04]);
    time.setCurrentTime(Date.parse("2026-10-13T12:00:00Z"));
    expect(store.state.unitMap["gh-airlift"]!._state?.location).toEqual([-0.17, 5.61]);
  });

  it("opens the shared JSON through the demo loader", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify(loadFixture()), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
    const { scenario } = useScenario();
    const loaded = await scenario.value.io.loadDemoScenario("op-saaguga-gugda");
    expect(fetchSpy).toHaveBeenCalledWith(
      "/scenarios/op-saaguga-gugda.json",
      expect.objectContaining({ method: "GET" }),
    );
    expect(loaded?.name).toBe("OP SAAGUGA GUGDA");
    expect(scenario.value.store.state.id).toBe("demo-op-saaguga-gugda");
  });
});
