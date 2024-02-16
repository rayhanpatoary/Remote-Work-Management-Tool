using Microsoft.AspNetCore.Mvc;

namespace WorkManagementTool.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult GetMessage()
        {
            return Ok(new { Message = "Hello from .NET Core!" });
        }
    }
}
