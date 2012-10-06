
EditorialPinch.Models.ApplicationModel = Backbone.Model.extend({
	initialize: function(attributes){
		
        EditorialPinch.Collections.sections = new EditorialPinch.Collections.SectionCollection(this.attributes.section);
    }
});
