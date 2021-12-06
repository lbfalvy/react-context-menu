# React Context Menu

Custom context menu for React, with a Provider-like interface as well as direct access to the menu for maximum flexibility

## usage

The data is structured in a tree of tuples
where the first element is the displayed name, and the second describes what
the element does:

```TS
type ContextMenuOption = [ReactNode, (() => void) | ContextMenuOption[] | null | undefined]
```

The component itself is called like so:

```TSX
<ContextMenu options={ContextMenuOption[]}>
  ...
</ContextMenu>
```

Right clicking on any descendant of this node will bring up the custom context
menu rather than the browser's default one. If you nest them, the menu elements
will appear one after the other, with a horizontal line separating them.

All layers of the context menu try to find room for themselves on either side
of the mouse pointer / their parent option, they won't extend off-screen unless
the frame is smaller than the menu.

On elements not wrapped in a ContextMenu, the browser's default context menu
will still appear. You aren't supposed to disable this for accessibility
reasons, but if you do it with something like

```TS
window.oncontextmenu = e => e.preventDefault()
```

then the custom menus won't break.