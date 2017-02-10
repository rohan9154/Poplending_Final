/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * sampleParty module
 */
define(['ojs/ojcore', 'knockout', 'partyFactory'
        ], function (oj, ko, partyFactory) {
/**
 * The view model for the main content view template
 */
function samplePartyContentViewModel() {
var self = this;
        self.partyData = ko.observable();
        self.partyDataFetched = ko.observable(false);
        self.url = ko.observable();
        //var a = parseInt(self.partyid());
        self.buttonClick4 = function (data, event) {
        //self.partyCollection = partyFactory.createPartyModel(1, null);
        self.serviceUrl = partyFactory.fetchUrl();
                self.serviceUrl.fetch({

                success: function () {
                console.log(self.serviceUrl);
                        self.url(self.serviceUrl.attributes.serviceURL);
                        console.log(self.url());
                        self.partyCollection = partyFactory.createPartyModel(self.partyid(), null, self.url());
                        self.partyCollection.fetch({
                        success: function () {
                        console.log("Party: ", self.partyCollection.attributes);
                                self.partyData(self.partyCollection.attributes);
                                console.log(self.partyData());
                                self.partyDataFetched(true);
                        }});
                }});
        },
                        self.buttonClick4();
                        self.partyClicked = function (data, event) {
                        self.router = oj.Router.rootInstance;
                                self.router.stateId('party');
                        },
                        self.backToPoplending = function (data, event) {

                        self.router = oj.Router.rootInstance;
                                self.router.stateId('Poplending');
                        }
                }
                return samplePartyContentViewModel;
                        });
