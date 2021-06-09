import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AlertsService } from '@dragonfish/client/alerts';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { InsertLinkComponent } from './components/insert-link/insert-link.component';
import { InsertMediaComponent } from './components/insert-media/insert-media.component';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Typography from '@tiptap/extension-typography';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Blockquote from '@tiptap/extension-blockquote';
import Code from '@tiptap/extension-code';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import Dropcursor from '@tiptap/extension-dropcursor';
import Iframe from './extensions';

@Component({
    selector: 'dragonfish-editor-lite',
    templateUrl: './editor-lite.component.html',
    styleUrls: ['./editor-lite.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EditorLiteComponent,
            multi: true,
        },
    ],
    encapsulation: ViewEncapsulation.None,
})
export class EditorLiteComponent implements ControlValueAccessor, OnDestroy {
    @Input() placeholder = `Leave a reply.`;
    @Input() disabled: boolean;
    alignmentMenuOpened = false;
    headingMenuOpened = false;

    editor = new Editor({
        extensions: [
            StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
            Underline,
            Typography,
            Image,
            Link,
            Blockquote,
            Code,
            TextAlign,
            Placeholder,
            Dropcursor,
            Iframe,
        ],
    });

    value: string;
    onChange: (value: string) => void;
    onTouch: (value: boolean) => void;

    constructor(private alerts: AlertsService, private dialog: MatDialog) {}

    ngOnDestroy() {
        this.editor.destroy();
    }

    chainCommand() {
        return this.editor.chain().focus();
    }

    openEmojiPicker() {
        this.alerts.info(`This feature is not yet available.`);
    }

    openInsertLink() {
        const ref = this.dialog.open(InsertLinkComponent);
        ref.afterClosed()
            .pipe(take(1))
            .subscribe((val: string) => {
                if (val) {
                    this.editor.chain().focus().setLink({ href: val }).run();
                }
            });
    }

    openInsertMedia(title: string) {
        const ref = this.dialog.open(InsertMediaComponent, { data: { title: title } });
        ref.afterClosed()
            .pipe(take(1))
            .subscribe((val: string) => {
                if (val && title === 'Insert Image') {
                    this.editor.chain().focus().setImage({ src: val }).run();
                } else {
                    this.alerts.info(`This feature is not yet supported!`);
                    //this.editor.chain().focus().setIframe({ src: val }).run();
                }
            });
    }

    writeValue(obj: string): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
