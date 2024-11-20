const product = [
    { name: "Web design", image: "https://cdn.dribbble.com/userupload/17637080/file/original-8a6e16f83708b997c4bfd807bafe2821.png?resize=200x150&vertical=center" },
    { name: "Topography", image: "https://cdn.dribbble.com/userupload/17638773/file/still-a40da5463f0cbb72ca9014fa571a53bc.png?resize=200x150&vertical=center" },
    { name: "Illustration", image: "https://cdn.dribbble.com/userupload/17333758/file/original-b1ea8c4830af164e5102b229dd416531.jpg?resize=200x150&vertical=center" },
    { name: "Print", image: "https://cdn.dribbble.com/userupload/17635481/file/original-4afc3c746226a6daf983f78cfd2b961d.png?resize=200x150&vertical=center" },
    { name: "Branding", image: "https://cdn.dribbble.com/userupload/17633382/file/original-d497f4b2d78a1ad91d4872b74c2d19c9.png?resize=200x150&vertical=center" },
    { name: "Animation", image: "https://cdn.dribbble.com/userupload/17623776/file/original-9181a40023293858f9e0fc7ad28371dd.png?resize=200x150&vertical=center" },
    { name: "Mobile", image: "https://cdn.dribbble.com/userupload/17037299/file/original-44f8851053e2d68f622f532dd9035011.png?crop=0x0-3201x2401&resize=200x150&vertical=center" },
    { name: "Product Design", image: "https://cdn.dribbble.com/userupload/17624990/file/original-e7ef3b024437954e9c34e685225b8c0a.jpg?resize=200x150&vertical=center"},
    { name: "Topography", image: "https://cdn.dribbble.com/userupload/17638773/file/still-a40da5463f0cbb72ca9014fa571a53bc.png?resize=200x150&vertical=center" },
    { name: "Illustration", image: "https://cdn.dribbble.com/userupload/17333758/file/original-b1ea8c4830af164e5102b229dd416531.jpg?resize=200x150&vertical=center" },
    { name: "Print", image: "https://cdn.dribbble.com/userupload/17635481/file/original-4afc3c746226a6daf983f78cfd2b961d.png?resize=200x150&vertical=center" },
    { name: "Branding", image: "https://cdn.dribbble.com/userupload/17633382/file/original-d497f4b2d78a1ad91d4872b74c2d19c9.png?resize=200x150&vertical=center" },
    { name: "Animation", image: "https://cdn.dribbble.com/userupload/17623776/file/original-9181a40023293858f9e0fc7ad28371dd.png?resize=200x150&vertical=center" },
    { name: "Mobile", image: "https://cdn.dribbble.com/userupload/17037299/file/original-44f8851053e2d68f622f532dd9035011.png?crop=0x0-3201x2401&resize=200x150&vertical=center" },
    { name: "Product Design", image: "https://cdn.dribbble.com/userupload/17624990/file/original-e7ef3b024437954e9c34e685225b8c0a.jpg?resize=200x150&vertical=center" },
  ];
  
  var clutter = "";
  product.forEach(function(elem){
    clutter += `<div class="slide">
    <div class="btm-img">
              <img
                src="${elem.image}"
                alt=""
              />
              <div class="shadow shadow1"></div>
              <div class="shadow shadow2"></div>
            </div>
            <div class="prdctName">
              <h5>${elem.name}</h5>
            </div>
          </div>`
  })
  document.querySelectorAll(".btm-container").forEach(function(elem){
    elem.innerHTML = clutter;
  })