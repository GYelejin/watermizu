$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

var data = [{
  title: 'Water Quality',
  values: [39, 61],
  labels: ['Portable', 'Non-Portable'],
  font: {

    size: 34

  },
  text: 'Water Quality',
  textposition: 'inside',
  hole: .6,
  type: 'pie'
}];

var layout = {
  height: 820,
  width: 600
};

Plotly.newPlot('Chart1', data, layout);
