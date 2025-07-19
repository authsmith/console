import { Button } from "@/primitive/button";
import { Collapsible } from "@ark-ui/solid/collapsible";
import { ChevronDownIcon } from "lucide-solid";

export default function LoginScreen() {
  return (
    <div class="space-y-10 border border-muted-950 rounded-sm px-6 py-4 w-full">
      <h1 class="text-2xl font-medium text-muted-300">Connect to AuthSmith</h1>
      <div class="space-y-4">
        <Button variant={"default"} class="w-full h-10 gap-2">
          <img
            src="/logos/google-mark.svg"
            alt="Google Logo"
            width={20}
            height={20}
          />
          Continue with Google
        </Button>
        <Button variant={"default"} class="w-full h-10 gap-2">
          <img
            src="/logos/github-mark.svg"
            alt="Github Logo"
            width={20}
            height={20}
          />
          Continue with Github
        </Button>
        <Collapsible.Root class="mt-2 mb-4">
          <Collapsible.Trigger class="flex items-center gap-3 cursor-pointer">
            Use other options
            <Collapsible.Indicator class="group">
              <ChevronDownIcon
                class="group-data-[state=open]:rotate-180 ease-linear duration-150"
                size={14}
              />
            </Collapsible.Indicator>
          </Collapsible.Trigger>
          <Collapsible.Content class="space-y-4 overflow-hidden mt-6">
            <Button variant={"default"} class="w-full h-10 gap-2">
              <img
                src="/logos/gitlab-mark.svg"
                alt="Gitlab Logo"
                width={20}
                height={20}
              />
              Continue with Gitlab
            </Button>
            <Button variant={"default"} class="w-full h-10 gap-2">
              <img
                src="/logos/microsoft-mark.svg"
                alt="Microsoft Logo"
                width={20}
                height={20}
              />
              Continue with Microsoft
            </Button>
            <Button variant={"default"} class="w-full h-10 gap-2">
              <img
                src="/logos/bitbucket-mark.svg"
                alt="Microsoft Logo"
                width={20}
                height={20}
              />
              Continue with Bitbucket
            </Button>
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </div>
  );
}
