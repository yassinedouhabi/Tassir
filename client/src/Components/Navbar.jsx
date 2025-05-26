import { Link } from "react-router";
import { Drawer } from "vaul";

function Nav() {
  return (
    <div className="nav-logo flex items-center justify-between">
      <div className="nav-logo">
        <h1 className="text-2xl font-bold">
          <Link to="/">Tassir</Link>
        </h1>
      </div>
      <div className="nav-menu">
        <Drawer.Root direction="right">
          <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all text-black hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
            menu
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content
              className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
              // The gap between the edge of the screen and the drawer is 8px in this case.
              style={{ "--initial-transform": "calc(100% + 8px)" }}
            >
              <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-2 text-zinc-900">
                    It supports all directions.
                  </Drawer.Title>
                  <Drawer.Description className="text-zinc-600 mb-2">
                    This one specifically is not touching the edge of the
                    screen, but that&apos;s not required for a side drawer.
                  </Drawer.Description>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
}

export default Nav;
