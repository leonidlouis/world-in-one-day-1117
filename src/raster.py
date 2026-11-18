"""Rasterize our SVG with the locally installed librsvg and Cairo libraries."""
import ctypes as c
import ctypes.util

rsvg = c.CDLL(ctypes.util.find_library('rsvg-2'))
cairo = c.CDLL(ctypes.util.find_library('cairo'))
gobject = c.CDLL(ctypes.util.find_library('gobject-2.0'))
rsvg.rsvg_handle_new_from_file.argtypes = [c.c_char_p, c.POINTER(c.c_void_p)]
rsvg.rsvg_handle_new_from_file.restype = c.c_void_p
rsvg.rsvg_handle_render_cairo.argtypes = [c.c_void_p, c.c_void_p]
rsvg.rsvg_handle_render_cairo.restype = c.c_int
cairo.cairo_image_surface_create.argtypes = [c.c_int, c.c_int, c.c_int]
cairo.cairo_image_surface_create.restype = c.c_void_p
cairo.cairo_create.argtypes = [c.c_void_p]
cairo.cairo_create.restype = c.c_void_p
cairo.cairo_surface_write_to_png.argtypes = [c.c_void_p, c.c_char_p]
cairo.cairo_surface_write_to_png.restype = c.c_int
cairo.cairo_destroy.argtypes = [c.c_void_p]
cairo.cairo_surface_destroy.argtypes = [c.c_void_p]
gobject.g_object_unref.argtypes = [c.c_void_p]

error = c.c_void_p()
handle = rsvg.rsvg_handle_new_from_file(b'build/entry.svg', c.byref(error))
assert handle and not error.value, 'Invalid SVG'
surface = cairo.cairo_image_surface_create(0, 1024, 1024)
context = cairo.cairo_create(surface)
assert rsvg.rsvg_handle_render_cairo(handle, context), 'Rendering failed'
assert cairo.cairo_surface_write_to_png(surface, b'build/raw.png') == 0
cairo.cairo_destroy(context)
cairo.cairo_surface_destroy(surface)
gobject.g_object_unref(handle)
print('Rasterized original SVG at 1024x1024')
