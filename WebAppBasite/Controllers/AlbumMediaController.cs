using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAppBasite.DAL.ModulesDAL;
using WebAppBasite.Models.ViewModel;

namespace WebAppBasite.Controllers
{
    public class AlbumMediaController : Controller
    {
        private readonly ILogger _logger;
       // private NewsDAL newDAL = new NewsDAL("News");
        private DanhMucChungDAL dmDAL = new DanhMucChungDAL("DanhMucChung");
        private ImagesDAL imgDAL = new ImagesDAL("Images");
        private ContactDAL ctDAL = new ContactDAL("Contact");
        private AlbumMediaViewModels viewModel = new AlbumMediaViewModels();
        private VideosDAL VideoDAL = new VideosDAL("Videos");
        

        public AlbumMediaController(ILogger<AlbumMediaController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }
        [Route("c/{id}/thu-vien")]
        public async Task<IActionResult> ThuVien(int id)
        {
            viewModel.AlbumList = await dmDAL.GetAbumList();
            viewModel.VideoList = await imgDAL.GetVideoByType();
            return View(viewModel);
        }

        [Route("v/{id}/{lug}")]
        public async Task<IActionResult> ListImagesByCate(int id, string slug)
        {
            var listImg = await imgDAL.GetImgbyAlbumId(id);
            return View(listImg);
        }
    }
}