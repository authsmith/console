import { A } from "@solidjs/router";
import { WorkspaceSwitch } from "./workspaces/switch";

export default function AppHeader() {
  return (
    <header class="fixed inset-0 w-full h-7 bg-accent-800">
      <div class="w-full h-full flex justify-between items-center px-10">
        <div class="flex items-center gap-2">
          <img src="/logo.svg" alt="AuthSmith Logo" class="h-6" />
          <span>/</span>
          <WorkspaceSwitch />
        </div>
        <nav>
          <ul class="space-x-2 font-code">
            <li>
              <A href="/">CMD</A>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
