var fgimage = null;
var bgimage = null;
var fcan = document.getElementById("c1");
var bcan = document.getElementById("c2");

function fg()
{
  var image = document.getElementById("finput1");
  fgimage = new SimpleImage(image);
  fgimage.drawTo(fcan);
}

function bg()
{
  var image1 = document.getElementById("finput2");
  bgimage = new SimpleImage(image1);
  bgimage.drawTo(bcan);
}

function greens()
{
  var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  for(var pixel of fgimage.values())
    {
      var x = pixel.getX();
      var y = pixel.getY();
      
      if(pixel.getGreen() > pixel.getRed() + pixel.getBlue())
        {
          var bgpixel = bgimage.getPixel(x,y);
          output.setPixel(x,y,bgpixel);
        }
      else
        {
          output.setPixel(pixel.getX(),pixel.getY(),pixel);
        }
      
    }
  return output;
}

function comp()
{
  if(fgimage == null || !fgimage.complete())
    {
      alert("foreground not loaded");
    }
  if(bgimage == null || !bgimage.complete())
    {
      alert("background not loaded");
    }
  clear();
  var photo = greens();
  photo.drawTo(fcan);
}

function clear()
{
  doclearcan(fgimage);
  doclearcan(bgimage);
}

function doclearcan(canvas)
{
  var ctx = fcan.getContext("2d");
  var ctx1 = bcan.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx1.clearRect(0,0,canvas.width,canvas.height);
}
