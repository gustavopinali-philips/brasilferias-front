import React from 'react';

export class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render(){
        return(
            <div>
                { /* <!--  wrapper  --> */ }
                <div id="wrapper">
                    { /* <!-- content--> */ }
                    <div className="content">
                        { /* <!-- Map --> */ }
                        <div className="map-container column-map right-pos-map fix-map hid-mob-map">
                            <div id="map-main"></div>
                            <ul className="mapnavigation">
                                <li><a href="#" className="prevmap-nav"><i className="fas fa-caret-left"></i> Prev</a></li>
                                <li><a href="#" className="nextmap-nav">Next <i className="fas fa-caret-right"></i></a></li>
                            </ul>
                            <div className="map-close"><i className="fas fa-times"></i></div>
                            <input id="pac-input" className="controls fl-wrap controls-mapwn" type="text" placeholder="What Nearby ?"></input>
                        </div>
                        { /* <!-- Map end --> */ }
                        { /* <!--col-list-wrap --> */ }
                        <div className="col-list-wrap left-list">
                            <div className="mobile-list-controls fl-wrap">
                                <div className="container">
                                    <div className="mlc show-hidden-column-map schm"><i className="fal fa-map-marked-alt"></i> Show Map</div>
                                    <div className="mlc show-list-wrap-search"><i className="fal fa-filter"></i> Filter</div>
                                </div>
                            </div>
                            { /* <!--list-wrap-search   --> */ }
                            <div className="list-wrap-search fl-wrap lws_mobile" id="lisfw">
                                <div className="container">
                                    <div className="row">
                                        { /* <!-- col-list-search-input-item --> */ }
                                        <div className="col-md-4">
                                            <div className="col-list-search-input-item in-loc-dec fl-wrap not-vis-arrow">
                                                <label>Cidades</label>
                                                <div className="listsearch-input-item">
                                                    <select data-placeholder="Para onde voce vai?" className="chosen-select" >
                                                        <option>Todas</option>
                                                        <option>São Paulo</option>
                                                        <option>Rio de Janeiro</option>
                                                        <option>Florianópolis</option>
                                                        <option>Belo Horizonte</option>
                                                        <option>Moscow</option>
                                                        <option>Dubai</option>
                                                        <option>Rome</option>
                                                        <option>Beijing</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        { /* <!-- col-list-search-input-item end --> */ }
                                        { /* <!-- col-list-search-input-item --> */ }
                                        <div className="col-md-4">
                                            <div className="col-list-search-input-item fl-wrap location autocomplete-container">
                                                <label>Destination</label>
                                                <span className="header-search-input-item-icon"><i className="fal fa-map-marker-alt"></i></span>
                                                <input type="text" placeholder="Destino ou Hotel" className="autocomplete-input" id="autocompleteid3" value={this.state.value} onChange={this.handleChange}/>
                                                <a href="#"><i className="fal fa-dot-circle"></i></a>
                                            </div>
                                        </div>
                                        { /* <!-- col-list-search-input-item end --> */ }                             
                                        { /* <!-- col-list-search-input-item --> */ }
                                        <div className="col-md-4">
                                            <div className="col-list-search-input-item in-loc-dec date-container  fl-wrap">
                                                <label>Date In-Out </label>
                                                <span className="header-search-input-item-icon"><i className="fal fa-calendar-check"></i></span>
                                                <input type="text"   placeholder="When" name="dates"   value={""}/>
                                            </div>
                                        </div>
                                        { /* <!-- col-list-search-input-item end --> */ }
                                    </div>
                                    <div className="search-opt-wrap fl-wrap">
                                        <div className="search-opt-wrap-container">
                                            { /* <!-- col-list-search-input-item --> */ }
                                            <div className="search-input-item midd-input">
                                                <div className="col-list-search-input-item fl-wrap">
                                                    <div className="quantity-item">
                                                        <label>Rooms</label>
                                                        <div className="quantity">
                                                            <input type="number" min="1" max="3" step="1" value={"1"}></input>
                                                        </div>
                                                    </div>
                                                    <div className="quantity-item">
                                                        <label>Adults</label>
                                                        <div className="quantity">
                                                            <input type="number" min="1" max="5" step="1" value={"1"}></input>
                                                        </div>
                                                    </div>
                                                    <div className="quantity-item">
                                                        <label>Children</label>
                                                        <div className="quantity">
                                                            <input type="number" min="0" max="3" step="1" value={"0"}></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            { /* <!-- col-list-search-input-item end --> */ }                             
                                            { /* <!-- col-list-search-input-item --> */ }
                                            <div className="search-input-item">
                                                <div className="range-slider-title">Price range</div>
                                                <div className="range-slider-wrap fl-wrap">
                                                    <input className="range-slider" data-from="300" data-to="1200" data-step="50" data-min="50" data-max="2000" data-prefix="$"></input>
                                                </div>
                                            </div>
                                            { /* <!-- col-list-search-input-item end --> */ }                             
                                            { /* <!-- col-list-search-input-item --> */ }										
                                            <div className="search-input-item small-input ">
                                                <div className="col-list-search-input-item fl-wrap">
                                                    <button className="header-search-button" >Search <i className="far fa-search"></i></button> { /* onclick="window.location.href='listing.html'" */ }
                                                </div>
                                            </div>
                                            { /* <!-- col-list-search-input-item end --> */ }                             
                                            { /* <!-- hidden-listing-filter --> */ }
                                            <div className="hidden-listing-filter fl-wrap">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        { /* <!--col-list-search-input-item --> */ }
                                                        <div className="col-list-search-input-item fl-wrap">
                                                            <h4>Star Rating</h4>
                                                            <div className="search-opt-container fl-wrap">
                                                                { /* <!-- Checkboxes --> */ }
                                                                <ul className="fl-wrap filter-tags">
                                                                    <li className="five-star-rating">
                                                                        <input id="check-aa2" type="checkbox" name="check" checked></input>
                                                                        <label for="check-aa2"><span className="listing-rating card-popup-rainingvis" data-starrating2="5"><span>5 Stars</span></span></label>
                                                                    </li>
                                                                    <li className="four-star-rating">
                                                                        <input id="check-aa3" type="checkbox" name="check"></input>
                                                                        <label for="check-aa3"><span className="listing-rating card-popup-rainingvis" data-starrating2="5"><span>4 Star</span></span></label>
                                                                    </li>
                                                                    <li className="three-star-rating">                                          
                                                                        <input id="check-aa4" type="checkbox" name="check"></input>
                                                                        <label for="check-aa4"><span className="listing-rating card-popup-rainingvis" data-starrating2="5"><span>3 Star</span></span></label>
                                                                    </li>
                                                                </ul>
                                                                { /* <!-- Checkboxes end --> */ }
                                                            </div>
                                                        </div>
                                                        { /* <!--col-list-search-input-item end--> */ } 
                                                    </div>
                                                    <div className="col-md-8">
                                                        { /* <!--col-list-search-input-item --> */ }
                                                        <div className="col-list-search-input-item fl-wrap">
                                                            <h4>Facilities</h4>
                                                            <div className="search-opt-container fl-wrap">
                                                                { /* <!-- Checkboxes --> */ }
                                                                <ul className="fl-wrap filter-tags half-tags">
                                                                    <li>
                                                                        <input id="check-aaa5" type="checkbox" name="check" checked></input>
                                                                        <label for="check-aaa5">Free WiFi</label>
                                                                    </li>
                                                                    <li>
                                                                        <input id="check-bb5" type="checkbox" name="check" checked></input>
                                                                        <label for="check-bb5">Parking</label>
                                                                    </li>
                                                                    <li>                                       
                                                                        <input id="check-dd5" type="checkbox" name="check"></input>
                                                                        <label for="check-dd5">Fitness Center</label>
                                                                    </li>
                                                                </ul>
                                                                { /* <!-- Checkboxes end --> */ }
                                                                { /* <!-- Checkboxes --> */ }
                                                                <ul className="fl-wrap filter-tags half-tags">
                                                                    <li>                                          
                                                                        <input id="check-cc5" type="checkbox" name="check"></input>
                                                                        <label for="check-cc5">Non-smoking Rooms</label>
                                                                    </li>
                                                                    <li>                                       
                                                                        <input id="check-ff5" type="checkbox" name="check" checked></input>
                                                                        <label for="check-ff5">Airport Shuttle</label>
                                                                    </li>
                                                                    <li>                                          
                                                                        <input id="check-c4" type="checkbox" name="check"></input>
                                                                        <label for="check-c4">Air Conditioning</label>
                                                                    </li>
                                                                </ul>
                                                                { /* <!-- Checkboxes end --> */ }
                                                            </div>
                                                        </div>
                                                        { /* <!--col-list-search-input-item end--> */ }                                            
                                                    </div>
                                                </div>
                                            </div>
                                            { /* <!-- hidden-listing-filter end --> */ }
                                        </div>
                                        <div className="show-more-filters act-hiddenpanel color3-bg"><i className="fal fa-plus"></i><span>More options</span></div>
                                    </div>
                                </div>
                            </div>
                            { /* <!--list-wrap-search end --> */ }
                            { /* <!-- list-main-wrap--> */ }
                            <div className="list-main-wrap fl-wrap card-listing">
                                <a className="custom-scroll-link back-to-filters" href="#lisfw"><i className="fas fa-angle-up"></i><span>Back to Filters</span></a>
                                <div className="container">
                                    { /* <!-- list-main-wrap-title--> */ }
                                    <div className="list-main-wrap-title fl-wrap">
                                        <h2>Results For : <span>New York </span></h2>
                                    </div>
                                    { /* <!-- list-main-wrap-title end--> */ }
                                    { /* <!-- list-main-wrap-opt--> */ }
                                    <div className="list-main-wrap-opt fl-wrap">
                                        { /* <!-- price-opt--> */ }
                                        <div className="price-opt">
                                            <span className="price-opt-title">Sort results by:</span>
                                            <div className="listsearch-input-item">
                                                <select data-placeholder="Popularity" className="chosen-select no-search-select" >
                                                    <option>Popularity</option>
                                                    <option>Average rating</option>
                                                    <option>Price: low to high</option>
                                                    <option>Price: high to low</option>
                                                </select>
                                            </div>
                                        </div>
                                        { /* <!-- price-opt end--> */ }
                                        { /* <!-- price-opt--> */ }
                                        <div className="grid-opt">
                                            <ul>
                                                <li><span className="two-col-grid act-grid-opt"><i className="fas fa-th-large"></i></span></li>
                                                <li><span className="one-col-grid"><i className="fas fa-bars"></i></span></li>
                                            </ul>
                                        </div>
                                        { /* <!-- price-opt end--> */ }                             
                                    </div>
                                    { /* <!-- list-main-wrap-opt end--> */ }
                                    { /* <!-- listing-item-container --> */ }
                                    <div className="listing-item-container init-grid-items fl-wrap">
                                        { /* <!-- listing-item  --> */ }
                                        <div className="listing-item">
                                            <div className="hotel-card fl-wrap">
                                                <div className="geodir-category-img card-post">
                                                    <a href="listing-single.html"><img src="https://pix10.agoda.net/hotelImages/115/1157073/1157073_16062412150044053329.jpg?s=1024x768" alt=""></img></a>
                                                    <div className="listing-counter">Awg/Night <strong>$320</strong></div>
                                                    <div className="sale-window big-sale">Sale 50%</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                                        <h4><a href="listing-single.html">Premium Plaza Hotel</a></h4>
                                                        <div className="geodir-category-location"><a href="#0" className="map-item"><i className="fas fa-map-marker-alt"></i> 27th Brooklyn New York, USA</a></div>
                                                        <div className="rate-className-name">
                                                            <div className="score"><strong>Very Good</strong>27 Reviews </div>
                                                            <span>5.0</span>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { /* <!-- listing-item end --> */ }
                                        { /* <!-- listing-item  --> */ }
                                        <div className="listing-item">
                                            <div className="hotel-card fl-wrap">
                                                <div className="geodir-category-img card-post">
                                                    <a href="listing-single.html"><img src="https://pix10.agoda.net/hotelImages/115/1157073/1157073_16062412150044053329.jpg?s=1024x768" alt=""></img></a>
                                                    <div className="listing-counter">Awg/Night <strong>$120</strong></div>
                                                    <div className="sale-window">Sale 20%</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                                        <h4><a href="listing-single.html">Grand Hero Palace</a></h4>
                                                        <div className="geodir-category-location"><a href="#1" className="map-item"><i className="fas fa-map-marker-alt"></i> W 85th St, New York,  USA</a></div>
                                                        <div className="rate-className-name">
                                                            <div className="score"><strong>Good</strong>12 Reviews </div>
                                                            <span>4.2</span>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { /* <!-- listing-item end --> */ }                                                
                                        { /* <!-- listing-item  --> */ }
                                        <div className="listing-item">
                                            <div className="hotel-card fl-wrap">
                                                <div className="geodir-category-img card-post">
                                                    <a href="listing-single.html"><img src="https://pix10.agoda.net/hotelImages/115/1157073/1157073_16062412150044053329.jpg?s=1024x768" alt=""></img></a>
                                                    <div className="listing-counter">Awg/Night <strong>$80</strong></div>
                                                    <div className="geodir-category-opt">
                                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                                        <h4><a href="listing-single.html">Park Central</a></h4>
                                                        <div className="geodir-category-location"><a href="#2" className="map-item"><i className="fas fa-map-marker-alt"></i>40 Journal Square Plaza, NJ,  USA</a></div>
                                                        <div className="rate-className-name">
                                                            <div className="score"><strong>Good</strong>6 Reviews </div>
                                                            <span>4.7</span>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { /* <!-- listing-item end --> */ }                           
                                        { /* <!-- listing-item  --> */ }
                                        <div className="listing-item">
                                            <div className="hotel-card fl-wrap">
                                                <div className="geodir-category-img card-post">
                                                    <a href="listing-single.html"><img src="https://pix10.agoda.net/hotelImages/115/1157073/1157073_16062412150044053329.jpg?s=1024x768" alt=""></img></a>
                                                    <div className="listing-counter">Awg/Night <strong>$50</strong></div>
                                                    <div className="geodir-category-opt">
                                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="3"></div>
                                                        <h4><a href="listing-single.html">Holiday Home</a></h4>
                                                        <div className="geodir-category-location"><a href="#1" className="map-item"><i className="fas fa-map-marker-alt"></i> 75 Prince St,  NY, USA</a></div>
                                                        <div className="rate-className-name">
                                                            <div className="score"><strong>Pleasant</strong>10 Reviews </div>
                                                            <span>3.2</span>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { /* <!-- listing-item end --> */ }                                                        
                                        { /* <!-- listing-item  --> */ }
                                        <div className="listing-item">
                                            <div className="hotel-card fl-wrap">
                                                <div className="geodir-category-img card-post">
                                                    <a href="listing-single.html"><img src="https://pix10.agoda.net/hotelImages/115/1157073/1157073_16062412150044053329.jpg?s=1024x768" alt=""></img></a>
                                                    <div className="listing-counter">Awg/Night <strong>$210</strong></div>
                                                    <div className="sale-window">Sale 10%</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="5"></div>
                                                        <h4><a href="listing-single.html">Moonlight Hotel</a></h4>
                                                        <div className="geodir-category-location"><a href="#4" className="map-item"><i className="fas fa-map-marker-alt"></i> 34-42 Montgomery St , NY, USA</a></div>
                                                        <div className="rate-className-name">
                                                            <div className="score"><strong>Very Good</strong>102 Reviews </div>
                                                            <span>4.7</span>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { /* <!-- listing-item end --> */ }
                                        { /* <!-- listing-item  --> */ }
                                        <div className="listing-item">
                                            <div className="hotel-card fl-wrap">
                                                <div className="geodir-category-img card-post">
                                                    <a href="listing-single.html"><img src="https://pix10.agoda.net/hotelImages/115/1157073/1157073_16062412150044053329.jpg?s=1024x768" alt=""></img></a>
                                                    <div className="listing-counter">Awg/Night <strong>$105</strong></div>
                                                    <div className="sale-window big-sale">Sale 70%</div>
                                                    <div className="geodir-category-opt">
                                                        <div className="listing-rating card-popup-rainingvis" data-starrating2="4"></div>
                                                        <h4><a href="listing-single.html">Moonlight Hotel</a></h4>
                                                        <div className="geodir-category-location"><a href="#5" className="map-item"><i className="fas fa-map-marker-alt"></i> 70 Bright St New York, USA</a></div>
                                                        <div className="rate-className-name">
                                                            <div className="score"><strong> Good</strong>8 Reviews </div>
                                                            <span>4.1</span>                                             
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        { /* <!-- listing-item end --> */ }                            
                                    </div>
                                    { /* <!-- listing-item-container end--> */ }
                                    { /* <!-- pagination--> */ }
                                    <div className="pagination">
                                        <a href="#" className="prevposts-link"><i className="fa fa-caret-left"></i></a>
                                        <a href="#" >1</a>
                                        <a href="#" className="current-page">2</a>
                                        <a href="#">3</a>
                                        <a href="#">4</a>
                                        <a href="#" className="nextposts-link"><i className="fa fa-caret-right"></i></a>
                                    </div>
                                    { /* <!-- pagination end--> */ }
                                </div>
                            </div>
                            { /* <!-- list-main-wrap end--> */ }
                        </div>
                        { /* <!--col-list-wrap end --> */ }
                        <div className="limit-box fl-wrap"></div>
                    </div>
                    { /* <!-- content end--> */ }
                </div>
                { /* <!--wrapper end --> */ }
                <a className="to-top"><i className="fas fa-caret-up"></i></a>
            { /* <!-- Main end --> */ }
        </div>

                
        );
    }
}