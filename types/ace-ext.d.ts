/* This file is generated using `npm run update-types` */

declare module "ace-builds/src-noconflict/ext-command_bar" {
    /**
     * Displays a command tooltip above the currently active line selection, with clickable elements.
     *
     * Internally it is a composite of two tooltips, one for the main tooltip and one for the
     * overflowing commands.
     * The commands are added sequentially in registration order.
     * When attached to an editor, it is either always shown or only when the active line is hovered
     * with mouse, depending on the alwaysShow property.
     */
    export class CommandBarTooltip {
        constructor(parentNode: HTMLElement, options?: Partial<import("ace-builds").Ace.CommandBarOptions>);
        parentNode: HTMLElement;
        tooltip: Tooltip;
        moreOptions: Tooltip;
        maxElementsOnTooltip: number;
        eventListeners: {};
        elements: {};
        commands: {};
        tooltipEl: HTMLDivElement;
        moreOptionsEl: HTMLDivElement;
        /**
         * Registers a command on the command bar tooltip.
         *
         * The commands are added in sequential order. If there is not enough space on the main
         * toolbar, the remaining elements are added to the overflow menu.
         *
         */
        registerCommand(id: string, command: TooltipCommand): void;
        isShown(): boolean;
        isMoreOptionsShown(): boolean;
        getAlwaysShow(): boolean;
        /**
         * Sets the display mode of the tooltip
         *
         * When true, the tooltip is always displayed while it is attached to an editor.
         * When false, the tooltip is displayed only when the mouse hovers over the active editor line.
         *
         */
        setAlwaysShow(alwaysShow: boolean): void;
        /**
         * Attaches the clickable command bar tooltip to an editor
         *
         * Depending on the alwaysShow parameter it either displays the tooltip immediately,
         * or subscribes to the necessary events to display the tooltip on hover.
         *
         */
        attach(editor: Editor): void;
        editor: import("ace-builds-internal/editor").Editor;
        /**
         * Updates the position of the command bar tooltip. It aligns itself above the active line in the editor.
         */
        updatePosition(): void;
        /**
         * Updates each command element in the tooltip.
         *
         * This is automatically called on certain events, but can be called manually as well.
         */
        update(): void;
        /**
         * Detaches the tooltip from the editor.
         */
        detach(): void;
        destroy(): void;
    }
    export type Editor = import("ace-builds-internal/editor").Editor;
    export type TooltipCommand = import("ace-builds").Ace.TooltipCommand;
    import { Tooltip } from "ace-builds-internal/tooltip";
    export var TOOLTIP_CLASS_NAME: string;
    export var BUTTON_CLASS_NAME: string;
    namespace Ace {
        type EventEmitter<T extends {
            [K in keyof T]: (...args: any[]) => any;
        }> = import("ace-builds").Ace.EventEmitter<T>;
        type CommandBarEvents = import("ace-builds").Ace.CommandBarEvents;
    }
    export interface CommandBarTooltip extends Ace.EventEmitter<Ace.CommandBarEvents> {
    }
}
declare module "ace-builds/src-noconflict/ext-language_tools" {
    export function setCompleters(val: any): void;
    export function addCompleter(completer: any): void;
    import textCompleter = require("ace-builds-internal/autocomplete/text_completer");
    export var keyWordCompleter: import("ace-builds").Ace.Completer;
    export var snippetCompleter: import("ace-builds").Ace.Completer;
    export { textCompleter };
}
declare module "ace-builds/src-noconflict/ext-inline_autocomplete" {
    /**
     * This class controls the inline-only autocompletion components and their lifecycle.
     * This is more lightweight than the popup-based autocompletion, as it can only work with exact prefix matches.
     * There is an inline ghost text renderer and an optional command bar tooltip inside.
     */
    export class InlineAutocomplete {
        constructor(editor: Editor);
        editor: Editor;
        keyboardHandler: HashHandler;
        blurListener(e: any): void;
        changeListener(e: any): void;
        changeTimer: {
            (timeout?: number): void;
            delay(timeout?: number): void;
            schedule: any;
            call(): void;
            cancel(): void;
            isPending(): any;
        };
        getInlineRenderer(): AceInline;
        inlineRenderer: AceInline;
        getInlineTooltip(): CommandBarTooltip;
        inlineTooltip: CommandBarTooltip;
        /**
         * This function is the entry point to the class. This triggers the gathering of the autocompletion and displaying the results;
         */
        show(options: import("ace-builds").Ace.CompletionOptions): void;
        activated: boolean;
        insertMatch(): boolean;
        goTo(where: import("ace-builds").Ace.InlineAutocompleteAction): void;
        getLength(): any;
        getData(index?: number): import("ace-builds").Ace.Completion | undefined;
        getIndex(): number;
        isOpen(): boolean;
        setIndex(value: number): void;
        getCompletionProvider(initialPosition: any): CompletionProvider;
        completionProvider: CompletionProvider;
        updateCompletions(options?: import("ace-builds").Ace.CompletionOptions): void;
        base: import("ace-builds-internal/anchor").Anchor;
        completions: FilteredList;
        detach(): void;
        destroy(): void;
        updateDocTooltip(): void;
        commands: {
            [key: string]: import("ace-builds").Ace.Command;
        };
    }
    export namespace InlineAutocomplete {
        function _for(editor: any): any;
        export { _for as for };
        export namespace startCommand {
            let name: string;
            function exec(editor: any, options: any): void;
            export namespace bindKey {
                let win: string;
                let mac: string;
            }
        }
        /**
         * Factory method to create a command bar tooltip for inline autocomplete.
         *
         * @param {HTMLElement} parentEl  The parent element where the tooltip HTML elements will be added.
         * @returns {CommandBarTooltip}   The command bar tooltip for inline autocomplete
         */
        export function createInlineTooltip(parentEl: HTMLElement): CommandBarTooltip;
    }
    import { Editor } from "ace-builds-internal/editor";
    import { HashHandler } from "ace-builds-internal/keyboard/hash_handler";
    import { AceInline } from "ace-builds-internal/autocomplete/inline";
    import { CommandBarTooltip } from "ace-builds/src-noconflict/ext-command_bar";
    import { CompletionProvider } from "ace-builds-internal/autocomplete";
    import { FilteredList } from "ace-builds-internal/autocomplete";
}
declare module "ace-builds/src-noconflict/ext-searchbox-css" {
    const _exports: string;
    export = _exports;
}
declare module "ace-builds/src-noconflict/ext-searchbox" {
    export function Search(editor: Editor, isReplace?: boolean): void;
    export type Editor = import("ace-builds-internal/editor").Editor;
    export class SearchBox {
        constructor(editor: Editor, range?: never, showReplaceForm?: never);
        activeInput: HTMLInputElement;
        element: HTMLDivElement;
        setSession(e: any): void;
        setEditor(editor: Editor): void;
        editor: Editor;
        searchRange: any;
        onEditorInput(): void;
        searchBox: HTMLElement;
        replaceBox: HTMLElement;
        searchOption: HTMLInputElement;
        replaceOption: HTMLInputElement;
        regExpOption: HTMLInputElement;
        caseSensitiveOption: HTMLInputElement;
        wholeWordOption: HTMLInputElement;
        searchInput: HTMLInputElement;
        replaceInput: HTMLInputElement;
        searchCounter: HTMLElement;
        /**
         * 
         * @external
        */
        $onChange: {
            schedule: (timeout?: number) => void;
        };
        setSearchRange(range: any): void;
        searchRangeMarker: number;
        /**
         * @external
         */
        $syncOptions(preventScroll?: boolean): void;
        highlight(re?: RegExp): void;
        find(skipCurrent: boolean, backwards: boolean, preventScroll?: any): void;
        updateCounter(): void;
        findNext(): void;
        findPrev(): void;
        findAll(): void;
        replace(): void;
        replaceAndFindNext(): void;
        replaceAll(): void;
        hide(): void;
        active: boolean;
        show(value: string, isReplace?: boolean): void;
        isFocused(): boolean;
    }
    import { HashHandler } from "ace-builds-internal/keyboard/hash_handler";
}
declare module "ace-builds/src-noconflict/ext-elastic_tabstops_lite" {
    export class ElasticTabstopsLite {
        constructor(editor: Editor);
        onAfterExec: () => void;
        onExec: () => void;
        onChange: (delta: any) => void;
        processRows(rows: number[]): void;
    }
    import { Editor } from "ace-builds-internal/editor";
}
declare module "ace-builds/src-noconflict/ext-error_marker" {
    export function showErrorMarker(editor: import("ace-builds-internal/editor").Editor, dir: number): void;
}
declare module "ace-builds/src-noconflict/ext-beautify" {
    export const singletonTags: string[];
    export const blockTags: string[];
    export const formatOptions: {
        lineBreaksAfterCommasInCurlyBlock?: boolean;
    };
    export function beautify(session: import("ace-builds-internal/edit_session").EditSession): void;
    export const commands: {
        name: string;
        description: string;
        exec: (editor: any) => void;
        bindKey: string;
    }[];
}
declare module "ace-builds/src-noconflict/ext-code_lens" {
    export function setLenses(session: EditSession, lenses: import("ace-builds").Ace.CodeLense[]): number;
    export function registerCodeLensProvider(editor: import("ace-builds-internal/editor").Editor, codeLensProvider: import("ace-builds").Ace.CodeLenseProvider): void;
    export function clear(session: EditSession): void;
    export type EditSession = import("ace-builds-internal/edit_session").EditSession;
    export type VirtualRenderer = import("ace-builds-internal/virtual_renderer").VirtualRenderer & {
    };
    export type CodeLenseCommand = import("ace-builds").Ace.CodeLenseCommand;
    export type CodeLense = import("ace-builds").Ace.CodeLense;
    import { Editor } from "ace-builds-internal/editor";
}
declare module "ace-builds/src-noconflict/ext-emmet" {
    export const commands: HashHandler;
    export function runEmmetCommand(editor: Editor): ReturnType<typeof setTimeout> | boolean;
    export function updateCommands(editor: Editor, enabled?: boolean): void;
    export function isSupportedMode(mode: any): boolean;
    export function isAvailable(editor: Editor, command: string): boolean;
    export function load(cb: any): boolean;
    export function setCore(e: any): void;
    import { HashHandler } from "ace-builds-internal/keyboard/hash_handler";
    import { Editor } from "ace-builds-internal/editor";
    /**
     * Implementation of {@link IEmmetEditor} interface for Ace
     */
    export class AceEmmetEditor {
        setupContext(editor: Editor): void;
        ace: Editor;
        indentation: string;
        /**
         * Returns character indexes of selected text: object with <code>start</code>
         * and <code>end</code> properties. If there's no selection, should return
         * object with <code>start</code> and <code>end</code> properties referring
         * to current caret position
         * @example
         * var selection = editor.getSelectionRange();
         * alert(selection.start + ', ' + selection.end);
         */
        getSelectionRange(): any;
        /**
         * Creates selection from <code>start</code> to <code>end</code> character
         * indexes. If <code>end</code> is ommited, this method should place caret
         * and <code>start</code> index
         * @example
         * editor.createSelection(10, 40);
         *
         * //move caret to 15th character
         * editor.createSelection(15);
         */
        createSelection(start: number, end?: number): void;
        /**
         * Returns current line's start and end indexes as object with <code>start</code>
         * and <code>end</code> properties
         * @example
         * var range = editor.getCurrentLineRange();
         * alert(range.start + ', ' + range.end);
         */
        getCurrentLineRange(): any;
        /**
         * Returns current caret position
         */
        getCaretPos(): number | null;
        /**
         * Set new caret position
         * @param {Number} index Caret position
         */
        setCaretPos(index: number): void;
        /**
         * Returns content of current line
         */
        getCurrentLine(): string;
        /**
         * Replace editor's content or it's part (from <code>start</code> to
         * <code>end</code> index). If <code>value</code> contains
         * <code>caret_placeholder</code>, the editor will put caret into
         * this position. If you skip <code>start</code> and <code>end</code>
         * arguments, the whole target's content will be replaced with
         * <code>value</code>.
         *
         * If you pass <code>start</code> argument only,
         * the <code>value</code> will be placed at <code>start</code> string
         * index of current content.
         *
         * If you pass <code>start</code> and <code>end</code> arguments,
         * the corresponding substring of current target's content will be
         * replaced with <code>value</code>.
         * @param {String} value Content you want to paste
         * @param {Number} [start] Start index of editor's content
         * @param {Number} [end] End index of editor's content
         * @param {Boolean} [noIndent] Do not auto indent <code>value</code>
         */
        replaceContent(value: string, start?: number, end?: number, noIndent?: boolean): void;
        /**
         * Returns editor's content
         */
        getContent(): string;
        /**
         * Returns current editor's syntax mode
         */
        getSyntax(): string;
        /**
         * Returns current output profile name (@see emmet#setupProfile)
         */
        getProfileName(): string;
        /**
         * Ask user to enter something
         * @param {String} title Dialog title
         * @return {String} Entered data
         * @since 0.65
         */
        prompt(title: string): string;
        /**
         * Returns current selection
         * @since 0.65
         */
        getSelection(): string;
        /**
         * Returns current editor's file path
         * @since 0.65
         */
        getFilePath(): string;
    }
}
declare module "ace-builds/src-noconflict/ext-hardwrap" {
    export function hardWrap(editor: import("ace-builds-internal/editor").Editor, options: import("ace-builds").Ace.HardWrapOptions): void;
    import { Editor } from "ace-builds-internal/editor";
}
declare module "ace-builds/src-noconflict/ext-menu_tools/settings_menu.css" {
    const _exports: string;
    export = _exports;
}
declare module "ace-builds/src-noconflict/ext-menu_tools/overlay_page" {
    export function overlayPage(editor: any, contentElement: HTMLElement, callback?: any): {
        close: () => void;
        setIgnoreFocusOut: (ignore: boolean) => void;
    };
}
declare module "ace-builds/src-noconflict/ext-menu_tools/get_editor_keyboard_shortcuts" {
    export function getEditorKeybordShortcuts(editor: import("ace-builds-internal/editor").Editor): any[];
}
declare module "ace-builds/src-noconflict/ext-keybinding_menu" {
    export function init(editor: Editor): void;
    import { Editor } from "ace-builds-internal/editor";
}
declare module "ace-builds/src-noconflict/ext-linking" { }
declare module "ace-builds/src-noconflict/ext-modelist" {
    /**
     * Suggests a mode based on the file extension present in the given path
     * @param {string} path The path to the file
     * @returns {Mode} Returns an object containing information about the
     *  suggested mode.
     */
    export function getModeForPath(path: string): Mode;
    export var modes: Mode[];
    export var modesByName: Record<string, Mode>;
    class Mode {
        constructor(name: string, caption: string, extensions: string);
        name: string;
        caption: string;
        mode: string;
        extensions: string;
        extRe: RegExp;
        supportsFile(filename: string): RegExpMatchArray | null;
    }
}
declare module "ace-builds/src-noconflict/ext-themelist" {
    export const themesByName: {
        [x: string]: Theme;
    };
    export const themes: Theme[];
    export type Theme = {
        /**
         * - The display caption of the theme.
         */
        caption: string;
        /**
         * - The path or identifier for the ACE theme.
         */
        theme: string;
        /**
         * - Indicates whether the theme is dark or light.
         */
        isDark: boolean;
        /**
         * - The normalized name used as the key.
         */
        name: string;
    };
}
declare module "ace-builds/src-noconflict/ext-options" {
    export class OptionPanel {
        constructor(editor: Editor, element?: HTMLElement);
        editor: import("ace-builds-internal/editor").Editor;
        container: HTMLElement;
        groups: any[];
        options: {};
        add(config: any): void;
        render(): void;
        renderOptionGroup(group: any): any[];
        renderOptionControl(key: string, option: any): any;
        renderOption(key: any, option: any): (string | any[] | {
            class: string;
        })[];
        setOption(option: string | number | any, value: string | number | boolean): void;
        getOption(option: any): any;
    }
    export type Editor = import("ace-builds-internal/editor").Editor;
    namespace Ace {
        type EventEmitter<T extends {
            [K in keyof T]: (...args: any[]) => any;
        }> = import("ace-builds").Ace.EventEmitter<T>;
        type OptionPanelEvents = import("ace-builds").Ace.OptionPanelEvents;
    }
    export interface OptionPanel extends Ace.EventEmitter<Ace.OptionPanelEvents> {
    }
}
declare module "ace-builds/src-noconflict/ext-prompt" {
    export type PromptOptions = {
        /**
         * Prompt name.
         */
        name: string;
        /**
         * Defines which part of the predefined value should be highlighted.
         */
        selection: [
            number,
            number
        ];
        /**
         * Set to true if prompt has description below input box.
         */
        hasDescription: boolean;
        /**
         * Description below input box.
         */
        prompt: string;
        /**
         * Placeholder for value.
         */
        placeholder: string;
        /**
         * Set to true to keep the prompt open when focus moves to another part of the editor.
         */
        ignoreFocusOut: boolean;
        /**
         * Function for defining list of options for value.
         */
        getCompletions: Function;
        /**
         * Function for defining current value prefix.
         */
        getPrefix: Function;
        /**
         * Function called when Enter is pressed.
         */
        onAccept: Function;
        /**
         * Function called when input is added to prompt input box.
         */
        onInput: Function;
        /**
         * Function called when Esc|Shift-Esc is pressed.
         */
        onCancel: Function;
        /**
         * Function for defining history list.
         */
        history: Function;
        maxHistoryCount: number;
        addToHistory: Function;
    };
    export type Editor = import("ace-builds-internal/editor").Editor;
    /**
     * @property {String} name             Prompt name.
     * @property {String} $type            Use prompt of specific type (gotoLine|commands|modes or default if empty).
     * @property {[number, number]} selection  Defines which part of the predefined value should be highlighted.
     * @property {Boolean} hasDescription  Set to true if prompt has description below input box.
     * @property {String} prompt           Description below input box.
     * @property {String} placeholder      Placeholder for value.
     * @property {Object} $rules           Specific rules for input like password or regexp.
     * @property {Boolean} ignoreFocusOut  Set to true to keep the prompt open when focus moves to another part of the editor.
     * @property {Function} getCompletions Function for defining list of options for value.
     * @property {Function} getPrefix      Function for defining current value prefix.
     * @property {Function} onAccept       Function called when Enter is pressed.
     * @property {Function} onInput        Function called when input is added to prompt input box.
     * @property {Function} onCancel       Function called when Esc|Shift-Esc is pressed.
     * @property {Function} history        Function for defining history list.
     * @property {number} maxHistoryCount
     * @property {Function} addToHistory
     */
    /**
     * Prompt plugin is used for getting input from user.
     *
     * @param {Editor} editor                   Ouside editor related to this prompt. Will be blurred when prompt is open.
     * @param {String | Partial<PromptOptions>} message                  Predefined value of prompt input box.
     * @param {Partial<PromptOptions>} options                  Cusomizable options for this prompt.
     * @param {Function} [callback]               Function called after done.
     * */
    export function prompt(editor: Editor, message: string | Partial<PromptOptions>, options: Partial<PromptOptions>, callback?: Function): any;
    export namespace prompt {
        function gotoLine(editor: Editor, callback?: Function): void;
        function commands(editor: Editor, callback?: Function): void;
        function modes(editor: Editor, callback?: Function): void;
    }
}
declare module "ace-builds/src-noconflict/ext-rtl" {
}
declare module "ace-builds/src-noconflict/ext-settings_menu" {
    export function init(): void;
}
declare module "ace-builds/src-noconflict/ext-simple_tokenizer" {
    /**
     * Parses provided content according to provided highlighting rules and return tokens.
     * Tokens either have the className set according to Ace themes or have no className if they are just pure text tokens.
     * Result is a list of list of tokens, where each line from the provided content is a separate list of tokens.
     *
     * @param {string} content to tokenize
     * @param {import("ace-builds").Ace.HighlightRules} highlightRules defining the language grammar
     * @returns {import("ace-builds").Ace.TokenizeResult} tokenization result containing a list of token for each of the lines from content
     */
    export function tokenize(content: string, highlightRules: import("ace-builds").Ace.HighlightRules): import("ace-builds").Ace.TokenizeResult;
}
declare module "ace-builds/src-noconflict/ext-spellcheck" {
    export function contextMenuHandler(e: any): void;
}
declare module "ace-builds/src-noconflict/ext-split" {
    const _exports: typeof import("ace-builds-internal/split");
    export = _exports;
}
declare module "ace-builds/src-noconflict/ext-static-css" {
    const _exports: string;
    export = _exports;
}
declare module "ace-builds/src-noconflict/ext-static_highlight" {
    function highlight(el: HTMLElement, opts: import("ace-builds").Ace.StaticHighlightOptions, callback?: any): boolean;
    export namespace highlight {
        export { render, renderSync, highlight, SyntaxMode, Theme };
    }
    /**
     * Transforms a given input code snippet into HTML using the given mode
     *
     * @param {string} input Code snippet
     * @param {string | SyntaxMode} mode String specifying the mode to load such as
     *  `ace/mode/javascript` or, a mode loaded from `/ace/mode`
     *  (use 'ServerSideHiglighter.getMode').
     * @param {string | Theme} theme String specifying the theme to load such as
     *  `ace/theme/twilight` or, a theme loaded from `/ace/theme`.
     * @param {number} lineStart A number indicating the first line number. Defaults
     *  to 1.
     * @param {boolean} disableGutter Specifies whether or not to disable the gutter.
     *  `true` disables the gutter, `false` enables the gutter. Defaults to `false`.
     * @param {function} [callback] When specifying the mode or theme as a string,
     *  this method has no return value and you must specify a callback function. The
     *  callback will receive the rendered object containing the properties `html`
     *  and `css`.
     * @returns {object} An object containing the properties `html` and `css`.
     */
    function render(input: string, mode: string | SyntaxMode, theme: string | Theme, lineStart: number, disableGutter: boolean, callback?: Function): object;
    /**
     * Transforms a given input code snippet into HTML using the given mode
     * @param {string} input Code snippet
     * @param {SyntaxMode | string} mode Mode loaded from /ace/mode (use 'ServerSideHiglighter.getMode')
     * @returns {object} An object containing: html, css
     */
    function renderSync(input: string, mode: SyntaxMode | string, theme: Theme, lineStart: any, disableGutter: boolean): object;
    type SyntaxMode = import("ace-builds").Ace.SyntaxMode;
    type Theme = import("ace-builds").Ace.Theme;
}
declare module "ace-builds/src-noconflict/ext-statusbar" {
    export type Editor = import("ace-builds-internal/editor").Editor;
    /** simple statusbar **/
    export class StatusBar {
        constructor(editor: Editor, parentNode: HTMLElement);
        element: HTMLDivElement;
        updateStatus(editor: Editor): void;
    }
}
declare module "ace-builds/src-noconflict/ext-whitespace" {
    export function $detectIndentation(lines: string[], fallback?: any): {
        ch?: string;
        length?: number;
    };
    export function detectIndentation(session: EditSession): {
        ch?: string;
        length?: number;
    } | {};
    export function trimTrailingSpace(session: EditSession, options: {
        trimEmpty?: boolean;
        keepCursorPosition?: boolean;
    }): void;
    export function convertIndentation(session: EditSession, ch: string, len: number): void;
    export function $parseStringArg(text: string): {};
    export function $parseArg(arg: any): any;
    export const commands: {
        name: string;
        description: string;
        exec: (editor: any, args: any) => void;
    }[];
    export type EditSession = import("ace-builds-internal/edit_session").EditSession;
}
declare module "ace-builds/src-noconflict/ext-diff/styles-css" {
    export const cssText: "\n/*\n * Line Markers\n */\n.ace_diff {\n    position: absolute;\n    z-index: 0;\n}\n.ace_diff.inline {\n    z-index: 20;\n}\n/*\n * Light Colors \n */\n.ace_diff.insert {\n    background-color: #eaffea; /*rgb(74 251 74 / 12%); */\n}\n.ace_diff.delete {\n    background-color: #ffecec; /*rgb(251 74 74 / 12%);*/\n}\n.ace_diff.aligned_diff {\n    background: rgba(206, 194, 191, 0.26);\n    background: repeating-linear-gradient(\n                45deg,\n              rgba(122, 111, 108, 0.26),\n              rgba(122, 111, 108, 0.26) 5px,\n              #FFFFFF 5px,\n              #FFFFFF 10px \n    );\n}\n\n.ace_diff.insert.inline {\n    background-color:  rgb(74 251 74 / 18%); \n}\n.ace_diff.delete.inline {\n    background-color: rgb(251 74 74 / 15%);\n}\n\n.ace_diff.delete.inline.empty {\n    background-color: rgba(255, 128, 79, 0.8);\n    width: 2px !important;\n}\n\n.ace_diff.insert.inline.empty {\n    background-color: rgba(49, 230, 96, 0.8);\n    width: 2px !important;\n}\n\n.ace_diff.selection {\n    border-bottom: 1px solid black;\n    border-top: 1px solid black;\n    background: transparent;\n}\n\n/*\n * Dark Colors \n */\n\n.ace_dark .ace_diff.insert.inline {\n    background-color: rgba(0, 130, 58, 0.45);\n}\n.ace_dark .ace_diff.delete.inline {\n    background-color: rgba(169, 46, 33, 0.55);\n}\n\n.ace_dark .ace_diff.selection {\n    border-bottom: 1px solid white;\n    border-top: 1px solid white;\n    background: transparent;\n}\n \n\n/* gutter changes */\n.ace_mini-diff_gutter-enabled > .ace_gutter-cell {\n    background-color: #f0f0f0;\n    padding-right: 13px;\n}\n\n.ace_mini-diff_gutter-enabled > .mini-diff-added {\n    background-color: #eaffea;\n    border-left: 3px solid #00FF00;\n    padding-left: 0;\n}\n\n.ace_mini-diff_gutter-enabled > .mini-diff-deleted {\n    background-color: #ffecec;\n    border-left: 3px solid #FF0000;\n    padding-left: 0;\n}\n\n\n.ace_mini-diff_gutter-enabled > .mini-diff-added:after {\n    position: absolute;\n    right: 2px;\n    content: \"+\";\n    color: darkgray;\n    background-color: inherit;\n}\n\n.ace_mini-diff_gutter-enabled > .mini-diff-deleted:after {\n    position: absolute;\n    right: 2px;\n    content: \"-\";\n    color: darkgray;\n    background-color: inherit;\n}\n.ace_fade-fold-widgets:hover .mini-diff-added:after {\n    display: none;\n}\n.ace_fade-fold-widgets:hover .mini-diff-deleted:after {\n    display: none;\n}\n\n.ace_diff_other .ace_selection {\n    filter: drop-shadow(1px 2px 3px darkgray);\n}\n\n";
}
declare module "ace-builds/src-noconflict/ext-diff/gutter_decorator" {
    export class MinimalGutterDiffDecorator {
        constructor(editor: import("ace-builds-internal/editor").Editor, type: number);
        gutterClass: string;
        gutterCellsClasses: {
            add: string;
            delete: string;
        };
        editor: import("ace-builds-internal/editor").Editor;
        type: number;
        chunks: any[];
        attachToEditor(): void;
        renderGutters(e: any, gutterLayer: any): void;
        setDecorations(changes: any): void;
        dispose(): void;
    }
}
declare module "ace-builds/src-noconflict/ext-diff/providers/default" {
    export function computeDiff(originalLines: any, modifiedLines: any, options: any): any;
    /**
     * VSCode’s computeDiff provider
     */
    export class DiffProvider {
        compute(originalLines: any, modifiedLines: any, opts: any): any;
    }
}
declare module "ace-builds/src-noconflict/ext-diff/base_diff_view" {
    export class BaseDiffView {
        /**
         * Constructs a new base DiffView instance.
         * @param {boolean} [inlineDiffEditor] - Whether to use an inline diff editor.
         * @param {HTMLElement} [container] - optional container element for the DiffView.
         */
        constructor(inlineDiffEditor?: boolean, container?: HTMLElement);
        onChangeTheme(): void;
        onInput(): void;
        onChangeFold(ev: any, session: EditSession): void;
        realign(): void;
        onSelect(e: any, selection: any): void;
        realignPending: boolean;
        diffSession: {
            sessionA: EditSession;
            sessionB: EditSession;
            chunks: DiffChunk[];
        };
        /**@type DiffChunk[]*/ chunks: DiffChunk[];
        inlineDiffEditor: boolean;
        currentDiffIndex: number;
        diffProvider: {
            compute: (val1: any, val2: any, options: any) => any[];
        };
        container: HTMLElement;
        options: {
            ignoreTrimWhitespace: boolean;
            maxComputationTimeMs: number;
            syncSelections: boolean;
        };
        markerB: DiffHighlight;
        markerA: DiffHighlight;
        /**
         * @param {Object} options - The configuration options for the DiffView.
         * @param {boolean} [options.ignoreTrimWhitespace=true] - Whether to ignore whitespace changes when computing diffs.
         * @param {boolean} [options.foldUnchanged=false] - Whether to fold unchanged regions in the diff view.
         * @param {number} [options.maxComputationTimeMs=0] - The maximum time in milliseconds to spend computing diffs (0 means no limit).
         * @param {boolean} [options.syncSelections=false] - Whether to synchronize selections between the original and edited views.
         */
        setOptions(options: {
            ignoreTrimWhitespace?: boolean;
            foldUnchanged?: boolean;
            maxComputationTimeMs?: number;
            syncSelections?: boolean;
        }): void;
        showSideA: boolean;
        savedOptionsA: Partial<import("ace-builds").Ace.EditorOptions>;
        savedOptionsB: Partial<import("ace-builds").Ace.EditorOptions>;
        editorA: any;
        editorB: any;
        activeEditor: any;
        otherSession: EditSession;
        otherEditor: any;
        addGutterDecorators(): void;
        gutterDecoratorA: MinimalGutterDiffDecorator;
        gutterDecoratorB: MinimalGutterDiffDecorator;
        foldUnchanged(): void;
        setDiffSession(session: {
            sessionA: any;
            sessionB: EditSession;
            chunks: DiffChunk[];
        }): void;
        sessionA: EditSession;
        sessionB: EditSession;
        getDiffSession(): {
            sessionA: EditSession;
            sessionB: EditSession;
            chunks: DiffChunk[];
        };
        setTheme(theme: any): void;
        getTheme(): any;
        resize(force: any): void;
        selectionRangeA: any;
        selectionRangeB: any;
        setProvider(provider: import("ace-builds/src-noconflict/ext-diff/providers/default").DiffProvider): void;
        /** scroll locking
         * @abstract
         **/
        align(): void;
        syncSelect(selection: any): void;
        updateSelectionMarker(marker: any, session: any, range: any): void;
        detach(): void;
        destroy(): void;
        gotoNext(dir: any): void;
        firstDiffSelected(): boolean;
        lastDiffSelected(): boolean;
        transformRange(range: Range, isOriginal: boolean): Range;
        transformPosition(pos: import("ace-builds").Ace.Point, isOriginal: boolean): import("ace-builds").Ace.Point;
        printDiffs(): void;
        findChunkIndex(chunks: DiffChunk[], row: number, isOriginal: boolean): number;
        searchHighlight(selection: any): void;
        initSelectionMarkers(): void;
        syncSelectionMarkerA: SyncSelectionMarker;
        syncSelectionMarkerB: SyncSelectionMarker;
        clearSelectionMarkers(): void;
    }
    export class DiffChunk {
        /**
         * @param {{originalStartLineNumber: number, originalStartColumn: number,
         * originalEndLineNumber: number, originalEndColumn: number, modifiedStartLineNumber: number,
         * modifiedStartColumn: number, modifiedEndLineNumber: number, modifiedEndColumn: number}[]} [charChanges]
         */
        constructor(originalRange: Range, modifiedRange: Range, charChanges?: {
            originalStartLineNumber: number;
            originalStartColumn: number;
            originalEndLineNumber: number;
            originalEndColumn: number;
            modifiedStartLineNumber: number;
            modifiedStartColumn: number;
            modifiedEndLineNumber: number;
            modifiedEndColumn: number;
        }[]);
        old: Range;
        new: Range;
        charChanges: DiffChunk[];
    }
    export class DiffHighlight {
        constructor(diffView: import("ace-builds/src-noconflict/ext-diff/base_diff_view").BaseDiffView, type: any);
        id: number;
        diffView: BaseDiffView;
        type: any;
        update(html: any, markerLayer: any, session: any, config: any): void;
    }
    import { EditSession } from "ace-builds-internal/edit_session";
    import { Editor } from "ace-builds-internal/editor";
    import { MinimalGutterDiffDecorator } from "ace-builds/src-noconflict/ext-diff/gutter_decorator";
    import { Range } from "ace-builds-internal/range";
    class SyncSelectionMarker {
        id: number;
        type: string;
        clazz: string;
        update(html: any, markerLayer: any, session: any, config: any): void;
        setRange(range: Range): void;
        range: Range;
    }
}
declare module "ace-builds/src-noconflict/ext-diff/diff_view" {
    export class DiffView extends BaseDiffView {
        /**
         * Constructs a new side by side DiffView instance.
         *
         * @param {Object} [diffModel] - The model for the diff view.
         * @param {import("ace-builds-internal/editor").Editor} [diffModel.editorA] - The editor for the original view.
         * @param {import("ace-builds-internal/editor").Editor} [diffModel.editorB] - The editor for the edited view.
         * @param {import("ace-builds-internal/edit_session").EditSession} [diffModel.sessionA] - The edit session for the original view.
         * @param {import("ace-builds-internal/edit_session").EditSession} [diffModel.sessionB] - The edit session for the edited view.
         * @param {string} [diffModel.valueA] - The original content.
         * @param {string} [diffModel.valueB] - The modified content.
         */
        constructor(diffModel?: {
            editorA?: import("ace-builds-internal/editor").Editor;
            editorB?: import("ace-builds-internal/editor").Editor;
            sessionA?: import("ace-builds-internal/edit_session").EditSession;
            sessionB?: import("ace-builds-internal/edit_session").EditSession;
            valueA?: string;
            valueB?: string;
        });
        init(diffModel: any): void;
        onMouseWheel(ev: any): any;
        onScroll(e: any, session: any): void;
        syncScroll(renderer: import("ace-builds-internal/virtual_renderer").VirtualRenderer): void;
        scrollA: any;
        scrollB: any;
        scrollSetBy: any;
        scrollSetAt: number;
    }
    import { BaseDiffView } from "ace-builds/src-noconflict/ext-diff/base_diff_view";
}
declare module "ace-builds/src-noconflict/ext-diff/inline_diff_view" {
    export class InlineDiffView extends BaseDiffView {
        /**
         * Constructs a new inline DiffView instance.
         * @param {Object} [diffModel] - The model for the diff view.
         * @param {import("ace-builds").Editor} [diffModel.editorA] - The editor for the original view.
         * @param {import("ace-builds").Editor} [diffModel.editorB] - The editor for the edited view.
         * @param {import("ace-builds").EditSession} [diffModel.sessionA] - The edit session for the original view.
         * @param {import("ace-builds").EditSession} [diffModel.sessionB] - The edit session for the edited view.
         * @param {string} [diffModel.valueA] - The original content.
         * @param {string} [diffModel.valueB] - The modified content.
         * @param {boolean} [diffModel.showSideA] - Whether to show the original view or modified view.
         * @param {HTMLElement} [container] - optional container element for the DiffView.
         */
        constructor(diffModel?: {
            editorA?: import("ace-builds").Editor;
            editorB?: import("ace-builds").Editor;
            sessionA?: import("ace-builds").EditSession;
            sessionB?: import("ace-builds").EditSession;
            valueA?: string;
            valueB?: string;
            showSideA?: boolean;
        }, container?: HTMLElement);
        init(diffModel: any): void;
        onAfterRender(changes: number, renderer: import("ace-builds").VirtualRenderer): void;
        textLayer: any;
        markerLayer: any;
        gutterLayer: any;
        cursorLayer: any;
        initTextLayer(): void;
        initTextInput(restore: any): void;
        othertextInput: any;
        otherEditorContainer: any;
        selectEditor(editor: any): void;
        initMouse(): void;
        onMouseDetach: () => void;
    }
    import { BaseDiffView } from "ace-builds/src-noconflict/ext-diff/base_diff_view";
}
