using System;
using System.Collections.Generic;
using System.Text;
using WebAppBasite.Models.ProjectModels;

namespace WebAppBasite.Models.ViewModel
{
  public class AlbumMediaViewModels
    {
        public IEnumerable<DanhMucChung> AlbumList { get; set; }
        public IEnumerable<Images> VideoList { get; set; }
    }
}
