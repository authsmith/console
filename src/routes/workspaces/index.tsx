import AppHeader from "@/components/AppHeader";
import WorkspacesListing from "@/components/Workspace/Listing";

export default function Layout() {
  return (
    <div class="w-full h-full">
      <AppHeader />
      <div class="w-full h-full">
        <div class="p-10">
          <WorkspacesListing />
        </div>
      </div>
    </div>
  );
}
