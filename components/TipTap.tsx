"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import { Node } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/Button";
import {
  Bold,
  Delete,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Languages,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import { note } from "@/db/schema";

type NoteContent = typeof note.$inferInsert;

const Tiptap = ({ initialContent }: { initialContent: NoteContent | null }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent ? initialContent.noteDescription : "",
    editorProps: {
      attributes: {
        class: "min-h-16 bg-slate-50 rounded-xl p-3 shadow-md",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="max-w-5xl space-y-2 bg-primary-100 p-4 rounded-xl">
      <h1 className="text-xl font-semibold">{initialContent?.noteTitle}</h1>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className="flex w-full gap-1 bg-slate-50 p-3 rounded-xl shadow-md">
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "defaultActive" : "default"}
      >
        <Bold className="size-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "defaultActive" : "default"}
      >
        <Italic className="size-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "defaultActive" : "default"}
      >
        <Strikethrough className="size-4" />
      </Button>
      <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <Delete className="size-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={
          editor.isActive("heading", { level: 1 }) ? "defaultActive" : "default"
        }
      >
        <Heading1 className="size-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={
          editor.isActive("heading", { level: 2 }) ? "defaultActive" : "default"
        }
      >
        <Heading2 className="size-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={
          editor.isActive("heading", { level: 3 }) ? "defaultActive" : "default"
        }
      >
        <Heading3 className="size-4" />
      </Button>

      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        variant={editor.isActive("bulletList") ? "defaultActive" : "default"}
      >
        <List className="size-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive("orderedList") ? "defaultActive" : "default"}
      >
        <ListOrdered className="size-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        variant={editor.isActive("orderedList") ? "defaultActive" : "default"}
      >
        <Languages className="size-4" />
      </Button>
    </div>
  );
};

const TranslationNode = Node.create({
  name: "TranslationNode",
  content: "paragraph+",
  marks: "",
  group: "block",
});

export default Tiptap;
