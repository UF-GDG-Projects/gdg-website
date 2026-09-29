import {
  VscDebug,
  VscExtensions,
  VscFiles,
  VscSearch,
  VscSourceControl,
} from "react-icons/vsc";

export default function Editor() {
  return (
    <div className="flex h-full lg:w-1/2 items-center justify-end lg:translate-x-[9px]">
      <div className=" w-[350px] sm:h-[370px] sm:w-[475px] rounded-xl border border-gray p-1">
        <div className="flex h-full overflow-hidden rounded-lg border border-gray">
          <div className="hidden sm:flex flex-col items-center bg-off-white py-4 text-xl text-dull">
            <span className="border-l border-black px-3.5 py-3 text-black">
              <VscFiles />
            </span>
            <span className="px-3.5 py-3">
              <VscSearch />
            </span>
            <span className="px-3.5 py-3">
              <VscSourceControl />
            </span>
            <span className="px-3.5 py-3">
              <VscDebug />
            </span>
            <span className="px-3.5 py-3">
              <VscExtensions />
            </span>
          </div>
          <div className="w-full font-mono">
            <div className="w-full bg-off-white text-dull">
              <span className="inline-block bg-white px-4 py-2 text-xs">
                tree.cpp
              </span>
            </div>
            <div className="p-3 text-[11px] sm:text-sm text-dull">
              <p>using namespace std;</p>
              <div className="pt-3 flex">
                tree::tree(){}; // Todo: Create constuctor&nbsp;
                <div className="relative h-4 w-0.5 bg-yellow">
                  <span className="absolute -top-3 sm:-top-4 whitespace-nowrap rounded-sm bg-yellow px-1 text-[9px] text-black">
                  T Weise
                  </span>
                </div>
              </div>
              <p className="pt-3">void tree::inorderDFS() {"{"}</p>
              <p className="px-2 pt-1.5"> if (!root) return;</p>
              <p className="px-2 pt-1.5"> inorderDFS(root-{">"}left);</p>
              <p className="px-2 pt-1.5">
                {" "}
                cout {"<<"} root-{">"}value {"<<"} " ";
              </p>
              <p className="px-2 pt-1.5">inorderDFS(root-{">"}right);</p>
              <p className="pt-1.5">{"}"};</p>
              <div className="flex pt-3">
                // Recursive inorder tree traversal.&nbsp;
                <div className="relative h-4 w-0.5 bg-blue">
                  <span className="absolute -top-3 sm:-top-4 whitespace-nowrap rounded-sm bg-blue px-1 text-[9px] text-off-white">
                    J Harris
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
