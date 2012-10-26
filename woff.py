#!/usr/bin/env fontforge

def conv(i, o):
	import fontforge
	fontforge.open(i).generate(o)

if __name__ == '__main__':
	import sys
	if 2 <= len(sys.argv) <= 3:
		ttf = sys.argv[1]
		if len(sys.argv) == 3:
			woff = sys.argv[2]
		else:
			woff = ttf[:ttf.rfind('.')]+'.woff'
		conv(ttf, woff)

