items = [
    {
        price: 100,
        type: 'ppc',
        multiplier: '2',
        title: 'Clicker upper',
        image: 'pointer.png',
        effect: 'Doubles the amount of points per click.',
        drawn: false,
        bought: false,
        func: function(){
			pointsPerClick *= 2;        	
        }
    },
    {
        price: 1000,
        type: 'ppc',
        multiplier: '2',
        title: 'Clicker upper II',
        image: 'pointer.png',
        effect: 'Doubles the amount of points per click.',
        drawn: false,
        bought: false,
        func: function(){
			pointsPerClick *= 2;        	
        }
    }

];

setInterval(function(){
	for(i=0;i<items.length;i++){
		if( !( items[i].drawn || items[i].bought )){
			if(points*10 > items[i].price){
				drawItem(i);
			}
		}
	}
}, 4000);

function drawItem(index){
    item = items[index];

    var source   = $("#item").html();
    var template = Handlebars.compile(source);
    context = {image: item.image, title: item.title, effect: item.effect, price: item.price*priceMultiplier, index: index};
    html = template(context);

    items[index].drawn = true;
    $('.upgrade_wrapper').append(html);
    console.log(html);

}

$(document).on('click', '.item', function() {
	index = this.id;
	item = items[index];
	if (item.price*priceMultiplier <= points){
		item.func();
		items[index].bought = true;
		this.remove();
	}
 }) ;
