import { RouteSectionProps } from "@solidjs/router";

export default function AuthLayout(props: RouteSectionProps) {
  return (
    <div class="w-full h-screen p-10 space-y-20">
      <img src="/logo.svg" alt="AuthSmith Logo" width={50} height={50} />
      <div class="mx-auto max-w-xl w-full">{props.children}</div>
    </div>
  );
}
