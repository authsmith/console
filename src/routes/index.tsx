import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import { RouteSectionProps } from "@solidjs/router";

export default function Layout(props: RouteSectionProps) {
  return (
    <main
      style={{
        height: "100vh",
        "min-width": "1140px",
        width: "100%",
      }}
    >
      <AppHeader />
      <div class="grid grid-cols-10 w-full h-full">
        <div class="col-span-2">
          <AppSidebar />
        </div>
        <div class="col-span-8 p-10 font-code overflow-y-auto">
          {props.children}
        </div>
      </div>
    </main>
  );
}
