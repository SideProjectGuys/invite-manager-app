import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'shortenString'
})
export class ShortenStringPipe implements PipeTransform {
	public transform(value: unknown, ...args: unknown[]): unknown {
		return null;
	}
}
