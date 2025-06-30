import { A } from "@solidjs/router";
import AppHeaderWorkspace from "./workspaces";

export default function AppHeader() {
  return (
    <header class="fixed inset-0 w-full h-8 bg-accent">
      <div class="w-full h-full flex justify-between items-center px-10">
        <div class="flex items-center gap-6">
          <img src="/logo.svg" alt="AuthSmith Logo" />
          <AppHeaderWorkspace />
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
