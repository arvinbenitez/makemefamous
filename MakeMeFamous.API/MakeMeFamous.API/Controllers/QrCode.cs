using System.IO;
using Microsoft.AspNetCore.Mvc;
using QRCoder;

namespace MakeMeFamous.API.Controllers
{
    [Route("[controller]")]
    public class QrCodeController: Controller
    {
        [HttpGet]
        public FileContentResult Get(string code)
        {
            var generator = new QRCodeGenerator();
            var data = generator.CreateQrCode(code, QRCodeGenerator.ECCLevel.Q);
            var qrCode = new QRCode(data);
            var image = qrCode.GetGraphic(20);

            using (var ms = new MemoryStream())
            {
                image.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
                var fileContents = ms.ToArray();
                return new FileContentResult(fileContents, "image/jpg");
            }
        }
    }
}
