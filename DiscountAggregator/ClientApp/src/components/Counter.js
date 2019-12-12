import React, { Component } from 'react';


export class Carousel extends Component {
    render() {
        return (
            <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#video-carousel-example" data-slide-to="0" class="active"></li>
                    <li data-target="#video-carousel-example" data-slide-to="1"></li>
                    <li data-target="#video-carousel-example" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <video class="video-fluid" autoplay loop muted>
                            <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="carousel-item">
                        <video class="video-fluid" autoplay loop muted>
                            <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="carousel-item">
                        <video class="video-fluid" autoplay loop muted>
                            <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>
        )

    }

}

export class Counter extends Component {
    static displayName = Counter.name;


    constructor(props) {
        super(props);
        this.state = {
            forecasts: [],
            loading: true,
            formValues: {},
            tech: 'select',
            Variety: [],
            itemsStore: [],
            selected: "",
        };
    }

    render() {

        return (
            <div class="page-wrap">
                <section id="main">


                    <header id="header">
                        <div>Snapshot <span>by TEMPLATED</span></div>
                    </header>

                    <section id="galleries">


                        <div class="gallery">

                            <header>
                                <h1>Stores</h1>
                                <ul class="tabs">
                                    <li><a href="#" data-tag="all" class="button active">All</a></li>
                                    <li><a href="#" data-tag="people" class="button">People</a></li>
                                    <li><a href="#" data-tag="place" class="button">Places</a></li>
                                    <li><a href="#" data-tag="thing" class="button">Things</a></li>
                                </ul>
                            </header>

                            <div class="content">
                                <div class="media all people">
                                    <a href="images/fulls/01.jpg"><img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" title="This right here is a caption." /></a>
                                </div>
                                <div class="media all place">
                                    <a href="images/fulls/05.jpg"><img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" title="This right here is a caption." /></a>
                                </div>
                                <div class="media all thing">
                                    <a href="images/fulls/09.jpg"><img src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" title="This right here is a caption." /></a>
                                </div>
                                <div class="media all people">
                                    <a href="images/fulls/02.jpg"><img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" title="This right here is a caption." /></a>
                                </div>
                               
                            </div>
                        </div>
                    </section>



                </section>
            </div>


        );
    }
}

