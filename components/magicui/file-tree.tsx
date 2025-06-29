"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface TreeViewElement {
  id: string;
  name: string;
  children?: TreeViewElement[];
}

interface TreeViewComponentProps {
  elements?: TreeViewElement[];
  initialExpandedItems?: string[];
  initialSelectedId?: string;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const Tree = React.forwardRef<HTMLDivElement, TreeViewComponentProps>(
  ({ elements = [], initialExpandedItems = [], initialSelectedId, openIcon, closeIcon }, ref) => {
    const [expandedItems, setExpandedItems] = useState<string[]>(initialExpandedItems);
    const [selectedId, setSelectedId] = useState<string | undefined>(initialSelectedId);

    const toggleItem = (id: string) => {
      setExpandedItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    };

    const renderTreeItem = (element: TreeViewElement) => {
      const isExpanded = expandedItems.includes(element.id);
      const isSelected = selectedId === element.id;
      const hasChildren = element.children && element.children.length > 0;

      return (
        <div key={element.id} className="space-y-1">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "w-full justify-start gap-2",
              isSelected && "bg-accent text-accent-foreground"
            )}
            onClick={() => {
              if (hasChildren) {
                toggleItem(element.id);
              }
              setSelectedId(element.id);
            }}
          >
            {hasChildren ? (
              isExpanded ? (
                openIcon || <ChevronDown className="h-4 w-4" />
              ) : (
                closeIcon || <ChevronRight className="h-4 w-4" />
              )
            ) : (
              <FileIcon className="h-4 w-4" />
            )}
            {element.name}
          </Button>
          {hasChildren && isExpanded && (
            <div className="ml-4 space-y-1">
              {element.children?.map((child) => renderTreeItem(child))}
            </div>
          )}
        </div>
      );
    };

    return (
      <ScrollArea className="h-full">
        <div ref={ref} className="space-y-1 p-2">
          {elements.map((element) => renderTreeItem(element))}
        </div>
      </ScrollArea>
    );
  }
);

Tree.displayName = "Tree";

export { Tree };
