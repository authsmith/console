import { cn } from "@/lib/cn";
import { Tabs } from "@ark-ui/solid/tabs";
import { createSignal } from "solid-js";

const TABS = [
  {
    label: "All",
    key: "all",
  },
  {
    label: "Owned",
    key: "owned",
  },
  {
    label: "Shared",
    key: "shared",
  },
];

const WorkspacesListing = () => {
  const [value, setValue] = createSignal<string>("all");
  return (
    <div class="space-y-4 mt-20 max-w-4xl mx-auto">
      <p class="text-xs text-muted-800">Workspace</p>
      <Tabs.Root value={value()} onValueChange={(e) => setValue(e.value)}>
        <Tabs.List class="space-x-4">
          {TABS.map(({ label, key }) => (
            <Tabs.Trigger
              class={cn(
                "px-3 py-1 rounded-xs text-xs",
                value() === key && "bg-accent-600/15",
              )}
              value={key}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div class="mt-10">
          {TABS.map(({ key, label }) => (
            <Tabs.Content value={key}>{label}</Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
};

export default WorkspacesListing;
