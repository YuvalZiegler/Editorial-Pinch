
window.EditorialPinch = {

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
   
  parseJSON:function(data) {
    this.Models.app = new this.Models.ApplicationModel(data);
    console.log("Editorial Pinch: ", this);	
  }, 
  
  init: function(data) {
    $.ajax({
      url: data || 'data/website.json',
      context:this,
      success:this.parseJSON
    });
  }
};