import { Button } from "@/primitive/button";
import { Select, createListCollection } from "@ark-ui/solid/select";
import { Check, SquarePlus } from "lucide-solid";
import { Index, Portal } from "solid-js/web";

export const WorkspaceSwitch = () => {
  const collection = createListCollection({
    items: ["Adalin", "Vercel", "Dept", "Hello Monday"],
  });

  return (
    <Select.Root collection={collection}>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select Workspace" />
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content class="border border-muted-950/50 bg-surface-950 drop-shadow-sm min-w-32 rounded-sm p-4 text-sm">
            <Select.ItemGroup class="space-y-4">
              <Select.ItemGroupLabel class="text-xs text-muted-800">
                Workspaces
              </Select.ItemGroupLabel>
              <Index each={collection.items}>
                {(item) => (
                  <Select.Item
                    class="mt-2 cursor-pointer flex items-center gap-2"
                    item={item()}
                  >
                    <Select.ItemIndicator>
                      <Check size={10} />
                    </Select.ItemIndicator>
                    <Select.ItemText>{item()}</Select.ItemText>
                  </Select.Item>
                )}
              </Index>
              <Button variant={"accent"} class="w-56 items-center gap-2">
                <span>Create Workspace</span>
                <SquarePlus size={14} />
              </Button>
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
