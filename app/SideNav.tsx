import {
  GraduationCap,
  Languages,
  MessageCircleQuestion,
  NotebookPen,
} from "lucide-react";

export default function SideNav({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full flex flex-row bg-sky-50">
      <nav className="h-full w-64 border-r-2 border-sky-200 flex flex-col items-center py-16 gap-16">
        <Languages className="size-16 p-4 bg-sky-200 rounded-2xl" />
        <ul className="w-5/6 space-y-3.5">
          <li className="px-4 py-3 rounded-2xl inline-flex bg-sky-200 w-full">
            <GraduationCap className="mr-5 size-6" />
            Cards
          </li>
          <li className="px-4 py-3 rounded-2xl inline-flex bg-sky-200 w-full">
            <NotebookPen className="mr-5 size-6" />
            NoteBooks
          </li>
          <li className="px-4 py-3 rounded-2xl inline-flex bg-sky-200 w-full">
            <MessageCircleQuestion className="mr-5 size-6" />
            Assignments
          </li>
        </ul>
      </nav>
      <main className="h-full w-full grow p-16">{children}</main>
    </div>
  );
}
