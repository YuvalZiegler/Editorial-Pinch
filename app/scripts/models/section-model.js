EditorialPinch.Models.SectionModel = Backbone.Model.extend({

    initialize:function (attr){
        if (attr.sections){
            this.attributes.subSection= new EditorialPinch.Collections.SectionCollection(attr.sections);
        } 
    }
});
