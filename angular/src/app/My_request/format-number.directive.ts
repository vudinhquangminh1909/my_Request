import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appFormatNumber]'
})
export class FormatNumberDirective {

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event'])
    onInput(event: any) {
        let inputValue = event.target.value.replace(/,/g, ''); // Loại bỏ dấu phẩy
        const parts = inputValue.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        const formattedValue = parts.join('.');
        this.el.nativeElement.value = formattedValue;
    }
}
