---
layout: section
title: Breadcrumb test
summary: see what happens
---


# start here


<div class="container">
  <div class="row">
    <div class="col-md-9 box-center">
      <div id="slider">
        <div class="carousel slide" id="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active"><img src="../img/05_Entry_800.jpg"/>
              <div class="carousel-caption">
                <h5>Slide #1</h5>
                <p>Image Credit <a href="https://placeimg.com" target="_blank">placeimg.com</a></p>
              </div>
            </div>
            <div class="carousel-item"><img src="https://placeimg.com/800/250/nature?t=2"/>
              <div class="carousel-caption">
                <h5>Slide #2</h5>
                <p>Image Credit <a href="https://placeimg.com" target="_blank">placeimg.com</a></p>
              </div>
            </div>
            <div class="carousel-item"><img src="https://placeimg.com/800/250/nature?t=3"/>
              <div class="carousel-caption">
                <h5>Slide #3</h5>
                <p>Image Credit <a href="https://placeimg.com" target="_blank">placeimg.com</a></p>
              </div>
            </div>
            <div class="carousel-item"><img src="https://placeimg.com/800/250/nature?t=4"/>
              <div class="carousel-caption">
                <h5>Slide #4</h5>
                <p>Image Credit <a href="https://placeimg.com" target="_blank">placeimg.com</a></p>
              </div>
            </div>
            <div class="carousel-item"><img src="https://placeimg.com/800/250/nature?t=5"/>
              <div class="carousel-caption">
                <h5>Slide #5</h5>
                <p>Image Credit <a href="https://placeimg.com" target="_blank">placeimg.com</a></p>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li data-slide-to="0"></li>
            <li data-slide-to="1"></li>
            <li data-slide-to="2"></li>
            <li data-slide-to="3"></li>
            <li data-slide-to="4"></li>
          </ol><a class="carousel-control-prev" href="#" role="button"><span class="carousel-control-prev-icon" aria-hidden="true"><span class="sr-only">Previous</span></span></a><a class="carousel-control-next" href="#" role="button"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>
        </div>
      </div>
    </div>
  </div>
</div>



# end of first test




<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../img/10_Entry_800.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/12_Entry_800.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/05_Entry_800.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

# try it here

$('.carousel').carousel()

shoud be done