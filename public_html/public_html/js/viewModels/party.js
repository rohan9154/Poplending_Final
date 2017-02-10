/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * party module
 */
define(['ojs/ojcore', 'knockout', 'partyFactory', 'ojs/ojinputtext', 'ojs/ojknockout-validation', 'ojs/ojtable', 'ojs/ojarraytabledatasource'
], function (oj, ko, partyFactory) {
    /**
     * The view model for the main content view template
     */
    function partyContentViewModel() {
        var self = this;
        self.partyData = ko.observableArray();
        self.partyname = ko.observable(null);
        self.partyid = ko.observable(null);
        self.tracker = ko.observable();
        self.showMessage = ko.observable(false);
        self.partyDataFetched = ko.observable(false);
        self.partyDataWhenId = ko.observable();
        self.errorMessage = ko.observable(false);
        self.tempPartyName = ko.observable(null);
        self.showMessageBothCred = ko.observable(false);
        self.url = ko.observable();
        self.buttonClick = function (data, event) {
            if (self.partyid() === null && self.partyname() === null) {
                self.errorMessage(false);
                self.showMessageBothCred(false);
                self.showMessage(true);
            } else if (self.partyid() !== null && self.partyname() !== null) {
                self.errorMessage(false);
                self.showMessage(false);
                self.showMessageBothCred(true);
                self.partyid(null);
                self.partyname(null);
            } else {
                self.serviceUrl = partyFactory.fetchUrl();
                self.serviceUrl.fetch({

                    success: function () {
                        console.log(self.serviceUrl);
                        self.url(self.serviceUrl.attributes.serviceURL);
                        console.log(self.url());
                        self.partyCollection = partyFactory.createPartyModel(self.partyid(), self.partyname(), self.url());
                        self.partyCollection.fetch({
                            success: function () {

                                console.log(self.partyCollection);
                                if (self.partyname() !== null) {
                                    // document.getElementById('partyid').disabled = true;

                                    var length = self.partyCollection.changes.length;
                                    console.log(length);
                                    for (var i = 0; i < length; i++) {
                                        self.partyCollection.attributes[i].name = self.partyCollection.attributes[i].firstName + " " + self.partyCollection.attributes[i].lastName;
                                        self.partyData.push(self.partyCollection.attributes[i]);
                                    }
                                    console.log(self.partyData());
                                    self.datasource = new oj.ArrayTableDataSource(self.partyData, {idAttribute: 'id'});
                                } else if (self.partyid() !== null) {

                                    self.partyDataWhenId(self.partyCollection.attributes);
                                }
                                self.partyDataFetched(true);
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                console.log(jqXHR);
                                console.log(textStatus);
                                console.log(errorThrown);
                                self.showMessageBothCred(false);
                                self.showMessage(false);
                                self.errorMessage(errorThrown);
                                if (self.partyname) {
                                    self.tempPartyName(self.partyname());
                                }

                                self.partyid(null);
                                self.partyname(null);
                            }});
                    }}),
                        self.partyClicked = function (data, event) {
                            self.partyid(null);
                            self.partyname(null);
                            self.partyData.removeAll();
                            self.showMessage(false);
                            self.errorMessage(false);
                            self.showMessageBothCred(false);
                            self.partyDataFetched(false);
                        },
                        self.backToPoplending = function (data, event) {

                            self.router = oj.Router.rootInstance;
                            self.router.stateId('Poplending');
                        }
            }
        }
    }
    ;
    //var partyContentViewModel=new partyContentViewModel();
    return partyContentViewModel;
});
