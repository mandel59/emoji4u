#!/usr/bin/env python

def modify(i, o):
	from fontTools import ttLib
	tt = ttLib.TTFont(i)
	del tt['vmtx']
	del tt['vhea']
	tt.save(o)

if __name__ == '__main__':
	import sys
	if 2 <= len(sys.argv) <= 3:
		i = sys.argv[1]
		if len(sys.argv) == 3:
			o = sys.argv[2]
		else:
			o = i[:i.rfind('.')] + '_1.ttf'
		modify(i, o)

