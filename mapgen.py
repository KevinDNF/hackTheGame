from PIL import Image

im = Image.open("img/map.png").convert("RGB")


class Pixel:
    def __init__(self, r, g, b):
        self.r = r
        self.g = g 
        self.b = b

    def compare(self, other):
        return self.r == other.r and self.g == other.g and self.b == other.b

def getPixel(x, y):
    global im
    r, g, b = im.getpixel((x, y))
    return Pixel(r, g, b)

#Constants
COLOURS = {
    Pixel(71, 165, 98): "g",    #GRASS
    Pixel(200, 193, 160): "p",  #Walkable areas
    Pixel(164, 164, 164): "p",  
    Pixel(255, 255, 255): "p",
    Pixel(101, 101, 101): "p",
    Pixel(101, 101, 101): "p",
    Pixel(148, 151, 160): "p",
    Pixel(155, 149, 143): "p",
    Pixel(123, 126, 133): "p"
}

output = []

TILE_SIZE = 40
with open("out.txt", "w") as file:
    for y in range((1080 // TILE_SIZE) - 1):
        output.append('"')
        for x in range((1960 // TILE_SIZE) - 1):
            px = x * TILE_SIZE
            py = y * TILE_SIZE
            #print(x, y, px, py)
            pxl = getPixel(px, py)
            found = False
            for colour, out in COLOURS.items():
                if colour.compare(pxl):
                    found = True
                    output[len(output) - 1] += out
                    break
            if not found:
                output[len(output) - 1] += "x"
        output[len(output) - 1] += '",\n'

    for y in range((1080 // TILE_SIZE) - 1):
        

    for line in output:
        file.write(line)