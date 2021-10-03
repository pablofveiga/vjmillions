<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>V&amp;John Millions</title>


  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/jquery.bxslider.min.css">
  <link rel="stylesheet" href="css/styles.css">

  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->


  <style type="text/css">
  	.draggable, .dropzone {
  		z-index: 1;
		transform: translateZ(1);
  	}
  </style>



	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
</head>

<body id="game-page">

	<div class="wrapper no-padding">	
		<div class="slider">
			<img src="pics/slide.jpg" alt="slider">
			<img src="pics/slide.jpg" alt="slider">
			<img src="pics/slide.jpg" alt="slider">
		</div>


		<div class="game-countdown">
			<span class="clock-icon">						
			</span>
			<span class="countdown-time">23Days 4:54:23</span>
		</div>		

		<div class="how-to-play">
			<div class="step1">
				<div class="drag-icon icon">
					<!-- <?php // echo file_get_contents("pics/tickets.svg") ?> -->
				</div>
				<div class="text">
					<h3>Step 1</h3>
					<p>Drag n'Drop Your selections into the marked area</p>			
				</div>
			</div>

			<div class="step2">
				<div class="move-icon icon">
					
				</div>
				<div class="text">
					<h3>Step 2</h3>
					<p>Arrange your selections by Drag n'Drop into your order</p>			
				</div>
			</div>

			<div class="step3">
				<div class="touch-icon icon">
					
				</div>
				<div class="text">
					<h3>Step 3</h3>
					<p>Add to Cart and Checkout - And you can win up to 10€ million</p>			
				</div>
			</div>
		</div>

	</div>

	<div class="wrapper no-padding">	

	</div>



<div class="wrapper">	

	<div class="game-container">

		<section class="participants">	
			<header class="participants-header common-header">
				<h2>
					<span class="step">
						Step 1
					</span>
					<strong>Make your Top 10 Selection</strong> <br class="responsive">by <span class="color1">Clicking</span> on the Entry or <span class="color1">Dragging</span> them acfross o the selection area
				</h2>	

				<div class="pick-buttons">
					<span class="logo-icon"></span>
					<p class="company-selection">VJs Top 10 Pick</p>
					<p class="autopipck">Auto Pick</p>
					<span class="shuffle-icon"></span>
				</div>
				<div class="participants-arrows responsive-arrows">
					<span class="left-arrow"></span>
					<span class="right-arrow"></span>					
				</div>

			</header>			

			<!--the id is important for the code-->
			<div class="participants-container" id="participants_container">
			</div>

			<div class="participants-arrows">
				<span class="left-arrow"></span>
				<span class="right-arrow"></span>
			</div>

			<div class="pick-buttons small-viewport">
				<span class="logo-icon"></span>
				<p class="company-selection">VJs Top 10 Pick</p>
				<p class="autopipck">Auto Pick</p>
				<span class="shuffle-icon"></span>
			</div>

		</section>

		<section class="selection">
			<header class="selection-header common-header">
				<h2>
					<span class="step">
						Step 2
					</span>					
					<strong>Your Top 10 Selection</strong> <br class="responsive"> Drag n Drop your Top10 Selection <span class="color1">HERE</span>
				</h2>
				<div class="selection-buttons responsive-selection-buttons">
					<span class="delete-icon"></span>
					<span class="shuffle-icon"></span>
				</div>				
			</header>		

			<div class="selection-container"  id="selection-container">
				<div class="top">
					<!-- dropzone class is for drag & drop js -->
					<div class="selected-bet-place selected dropzone"><span class="number">1</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">2</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">3</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">4</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">5</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">6</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">7</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">8</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">9</span></div>
					<div class="selected-bet-place selected dropzone"><span class="number">10</span></div>				
				</div>
				<div class="selection-buttons">
					<span class="delete-icon"></span>
					<span class="shuffle-icon"></span>
				</div>
			</div>
		</section>

	</div>

	<div class="two-section-container">
		<section class="prizes">
			<header class="prizes-header">
				<h2>VJ's Prizes</h2>
			</header>

			<div class="prizes-content">
				
				<div class="prizes-text-content">
					<p class="top-prize">Match top 10 in Correct Order <span class="prize-ammount">Win $10,000,000</span></p>
					<p>Match top 10 in Random Order <span class="prize-ammount">Win $500</span></p>
					<p>Match top 5 in Correct Order <span class="prize-ammount">Win $500</span></p>
					<p>Match top 3 in Correct Order <span class="prize-ammount">Win $100</span></p>					
				</div>
				<div class="prizes-pic-content">
					<img src="pics/prize-pic.png" alt="prizes">
				</div>

			</div>

			<!-- <img src="pics/prizes.png" alt="prizes"> -->
		</section>

		<section class="cart">
			<header class="cart-header common-header">
				<h2>
					<span class="step">Step 3</span>
					Get your tickets
				</h2>
				<span class="view-cart">View cart</span>
			</header>
			<div class="cart-content">

				<div class="price-display">
					<p class="description">
						<span class="bet-counter">3</span>
						X
						<span class="bet-title">F1 Grand Prix - Monaco</span>
					</p>
					<p class="price">
						<span class="bet-ammount">
							30€
						</span>
					</p>					
				</div>

				<div class="total-display">
					<div class="total-area">
						<p>Total: </p>
						<p class="total-ammount"><span class="currency">€</span>30</p>
					</div>

					<div class="buttons-area">
						<button class="play-again">Add & Play Again</button>
						<button class="place-bet">Get tickets</button>
						
					</div>
				</div>
			</div>
		</section>		
	</div>



	<section class="my-bets">
		<header class="my-bets-header">
			<h2 data-tab="cart"><span class="down-arrow"></span> Cart</h2>
			<h2 data-tab="bets"><span class="down-arrow"></span> My Bets</h2>
			<span class="maximize-cart">Show Cart</span>
		</header>

		<div class="my-bets-placeholder">			
			<div class="cart-display-content cart-tab-content" id="cart">
				<div class="bet cart-bet">
					<div class="bet-header">
						<span class="bet-logo">
							
						</span>
						<div class="bet-date">
							28th of may
						</div>
					</div>

					<h3 class="bet-title">F1 Grand Prix - Monaco</h3>
					<h4 class="ticket-date">2017-05-27</h4>

					<div class="bet-content">
		                <ul>
		                    <li>S. Vettel</li>
		                    <li>K. Raikkonen</li>
		                    <li>D. Ricciardo</li>
		                    <li>V. Bottas</li>
		                    <li>M. Verstappen</li>
		                    <li>C. Sainz Jr.</li>
		                    <li>L. Hamilton</li>
		                    <li>R. Grosjean</li>
		                    <li>F. Massa</li>
		                    <li>K. Magnussen</li>
		                </ul>
					</div>

					<div class="bet-buttons">
						<button class="edit-bet">Edit</button>
						<span class="delete-bet"></span>
					</div>

				</div>
			</div>

			<div class="my-bets-content cart-tab-content" id="bets">
				<div class="bet cart-bet">
					<div class="bet-header">
						<span class="bet-logo">
							
						</span>
						<div class="bet-date">
							28th of may
						</div>
					</div>

					<h3 class="bet-title">F1 Grand Prix - Monaco</h3>
					<h4 class="ticket-date">2017-05-27</h4>

					<div class="bet-content">
		                <ul>
		                    <li>S. Vettel</li>
		                    <li>K. Raikkonen</li>
		                    <li>D. Ricciardo</li>
		                    <li>V. Bottas</li>
		                    <li>M. Verstappen</li>
		                    <li>C. Sainz Jr.</li>
		                    <li>L. Hamilton</li>
		                    <li>R. Grosjean</li>
		                    <li>F. Massa</li>
		                    <li>K. Magnussen</li>
		                </ul>
					</div>

					<div class="bet-buttons">
						<button class="edit-bet">Edit</button>
						<span class="delete-bet"></span>
					</div>
				</div>
				<div class="bet cart-bet">
					<div class="bet-header">
						<span class="bet-logo">
							
						</span>
						<div class="bet-date">
							28th of may
						</div>
					</div>

					<h3 class="bet-title">F1 Grand Prix - Monaco</h3>
					<h4 class="ticket-date">2017-05-27</h4>

					<div class="bet-content">
		                <ul>
		                    <li>S. Vettel</li>
		                    <li>K. Raikkonen</li>
		                    <li>D. Ricciardo</li>
		                    <li>V. Bottas</li>
		                    <li>M. Verstappen</li>
		                    <li>C. Sainz Jr.</li>
		                    <li>L. Hamilton</li>
		                    <li>R. Grosjean</li>
		                    <li>F. Massa</li>
		                    <li>K. Magnussen</li>
		                </ul>
					</div>

					<div class="bet-buttons">
						<button class="edit-bet">Edit</button>
						<span class="delete-bet"></span>
					</div>

				</div>			
				
			</div>			
		</div>

	</section>

	<section class="information-area">
		<header>
			<h3 class="game-info active" data-tab="tab-3">Game Info</h3>
			<h3 class="participans" data-tab="tab-2">F1 Participants</h3>
			<h3 class="game-rules" data-tab="tab-4">Game Rules</h3>
			<h3 class="results" data-tab="tab-1">Results</h3>
		</header>

		<div class="results-content tab-content " id="tab-1">
			<div class="bet result-bet">
				<div class="bet-header">
					<span class="bet-logo">
						
					</span>
					<div class="bet-date">
						28th of may
					</div>
				</div>

				<h3 class="bet-title">F1 Grand Prix - Monaco</h3>
				<h4 class="ticket-date">2017-05-27</h4>

				<div class="bet-content">
	                <ul>
	                    <li>C. Sainz Jr.</li>
	                    <li>F. Massa</li>
	                    <li>D. Ricciardo</li>
	                    <li>V. Bottas</li>
	                    <li>M. Verstappen</li>
	                    <li>R. Grosjean</li>
	                    <li>K. Magnussen</li>
	                    <li>S. Vettel</li>
	                    <li>K. Raikkonen</li>
	                    <li>L. Hamilton</li>
	                </ul>
				</div>
			</div>
		</div>

		<div class="participants-content tab-content" id="tab-2">
			<ul class="participants-list">
<!-- 				<li class="participant">
					<span class="profile-pic">
						<img src="pics/participant-pic.png" alt="participant">
					</span>
					<span class="participant-name">Kimi Raikonen</span>
				</li> -->
			</ul>
		</div>

		<div class="game-info-content tab-content active" id="tab-3">
			<div class="game-info-row">
				<section class="info1">
					<header>
						<h3>Lorem ipsum dolor</h3>
					</header>
					<div class="game-section-content">
						<div class="game-section-text">
							<span class="game-section-image image1"></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nisi tenetur recusandae, eum aliquid magni libero maiores quos. Id aperiam placeat possimus consequuntur atque facilis? Tenetur, magnam architecto. Vero, non.</p>
						</div>
					</div>
				</section>
				<section class="info2">
					<header>
						<h3>Lorem ipsum dolor</h3>
					</header>
					<div class="game-section-content">
						<div class="game-section-text">
							<span class="game-section-image image2"></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nisi tenetur recusandae, eum aliquid magni libero maiores quos. Id aperiam placeat possimus consequuntur atque facilis? Tenetur, magnam architecto. Vero, non.</p>
						</div>
					</div>
				</section>				
			</div>
			<div class="game-info-row">
				<section class="info3">
					<header>
						<h3>Lorem ipsum dolor</h3>
					</header>
					<div class="game-section-content">
						<div class="game-section-text">
							<span class="game-section-image image3"></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nisi tenetur recusandae, eum aliquid magni libero maiores quos. Id aperiam placeat possimus consequuntur atque facilis? Tenetur, magnam architecto. Vero, non.</p>
						</div>
					</div>
				</section>
				<section class="info4">
					<header>
						<h3>Lorem ipsum dolor</h3>
					</header>
					<div class="game-section-content">
						<div class="game-section-text">
							<span class="game-section-image image4"></span>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nisi tenetur recusandae, eum aliquid magni libero maiores quos. Id aperiam placeat possimus consequuntur atque facilis? Tenetur, magnam architecto. Vero, non.</p>
						</div>
					</div>
				</section>				
			</div>			
		</div>

		<div class="game-rules-content tab-content" id="tab-4">
			<section class="game-rules-section">
				<header>
					<h3>Game Rules</h3>
				</header>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, rem, sit. Voluptate fuga aperiam perspiciatis ducimus ipsam, doloribus, commodi possimus voluptas aut vero delectus animi quasi. Autem porro suscipit quisquam.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab qui, magni asperiores. Eum nesciunt, explicabo dolores similique rem aut vel cumque suscipit accusamus ipsum, ullam! Sapiente nesciunt voluptas voluptatibus, quidem.
				</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, rem, sit. Voluptate fuga aperiam perspiciatis ducimus ipsam, doloribus, commodi possimus voluptas aut vero delectus animi quasi. Autem porro suscipit quisquam.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab qui, magni asperiores. Eum nesciunt, explicabo dolores similique rem aut vel cumque suscipit accusamus ipsum, ullam! Sapiente nesciunt voluptas voluptatibus, quidem.
				</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, rem, sit. Voluptate fuga aperiam perspiciatis ducimus ipsam, doloribus, commodi possimus voluptas aut vero delectus animi quasi. Autem porro suscipit quisquam.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab qui, magni asperiores. Eum nesciunt, explicabo dolores similique rem aut vel cumque suscipit accusamus ipsum, ullam! Sapiente nesciunt voluptas voluptatibus, quidem.
				</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, rem, sit. Voluptate fuga aperiam perspiciatis ducimus ipsam, doloribus, commodi possimus voluptas aut vero delectus animi quasi. Autem porro suscipit quisquam.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab qui, magni asperiores. Eum nesciunt, explicabo dolores similique rem aut vel cumque suscipit accusamus ipsum, ullam! Sapiente nesciunt voluptas voluptatibus, quidem.
				</p>
			</section>
		</div>
	</section>

	<div class="facebook-bar">
		<p>
			<span class="fb-icon"></span>
			Follow VJ's millions on messenger to keep in touch with all games and jackpots
		</p>
		<a class="follow-fb" href="#">Follow on Messenger</a>
	</div>

	<section class="more-jackpots">
		<header>
			<h3>
				Players wich have played F1 also like
			</h3>
		</header>

		<div class="jackpots-content owl-carousel">
			
			<div class="jackpot jackpot1">
				<p class="date">Wed 5 Jackpot</p>
				<p class="prize">$ 78.5M</p>
				<div class="down-icons">
					<p><span class="buy-icon">Quick Buy</span></p>
					<p><span class="select-icon">Select order</span></p>
				</div>
			</div>

			<div class="jackpot jackpot2">
				<p class="date">Wed 5 Jackpot</p>
				<p class="prize">$ 78.5M</p>
				<div class="down-icons">
					<p><span class="buy-icon">Quick Buy</span></p>
					<p><span class="select-icon">Select order</span></p>
				</div>
			</div>

			<div class="jackpot jackpot3">
				<p class="date">Wed 5 Jackpot</p>
				<p class="prize">$ 78.5M</p>
				<div class="down-icons">
					<p><span class="buy-icon">Quick Buy</span></p>
					<p><span class="select-icon">Select order</span></p>
				</div>
			</div>

			<div class="jackpot jackpot4">
				<p class="date">Wed 5 Jackpot</p>
				<p class="prize">$ 78.5M</p>
				<div class="down-icons">
					<p><span class="buy-icon">Quick Buy</span></p>
					<p><span class="select-icon">Select order</span></p>
				</div>
			</div>		

		</div>
	</section>
</div>

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>


<script>


// 	var participant = '<div class="single-participant item" data-compid="dow"><div class="image"></div><div class="text-area"><h3>Jahn Dow</h3><h4>Team name</h4></div><span class="info-icon">i</span></div>'


// 	var betTicket = '<div class="bet cart-bet"> <div class="bet-header"> <span class="bet-logo"> </span> <div class="bet-date"> 28th of may </div> </div> <h3 class="bet-title">F1 Grand Prix - Monaco</h3> <h4 class="ticket-date">2017-05-27</h4> <div class="bet-content"> <ul> <li>S. Vettel</li> <li>K. Raikkonen</li> <li>D. Ricciardo</li> <li>V. Bottas</li> <li>M. Verstappen</li> <li>C. Sainz Jr.</li> <li>L. Hamilton</li> <li>R. Grosjean</li> <li>F. Massa</li> <li>K. Magnussen</li> </ul> </div> <div class="bet-buttons"> <button class="edit-bet">Edit</button> <span class="delete-bet"></span> </div> </div>'


							
// 	var participant2  = '<li class="participant"> <span class="profile-pic"> <img src="pics/participant-pic.png" alt="participant"> </span> <span class="participant-name">Kimi Raikonen</span> </li>';



// 	var participantGroup = '<div class="participant-group">'+participant2+participant2+participant2+participant2+participant2+participant2+participant2+participant2+participant2+'</div>'


// for (var i = 0; i<=23; i++) {
// 	$( ".participants-container" ).append(participant);
// }

// for (var i = 0; i <5; i++) {
// 	$(".cart-display-content").append(betTicket);
// }


// // for (var i = 0; i<=30; i++) {
// // 	$( ".participants-list" ).append(participant2);
// // }


// for (var i = 0; i<=8; i++) {
// 	$( ".participants-list" ).append(participantGroup);
// }



	// $( ".single-participant" ).clone().appendTo( ".participants-container" );
</script>

<script src="js/jquery.mousewheel.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.bxslider.min.js"></script>

	<script type="text/javascript" src="js/shims.js"></script>
	<script type="text/javascript" src="js/interact.js"></script>
	<script type="text/javascript" src="js/paginator.js"></script>  	
	<script type="text/javascript" src="js/functions.js"></script>
	<script type="text/javascript" src="js/api.js"></script>
	<script type="text/javascript" src="js/app.js"></script>


	<script type="text/javascript" src="js/pablo_functions.js"></script>



</body>
</html>