describe('Tests using POM', () => {
    before(()=>{
      cy.login(`${Cypress.env('EMAIL')}`, `${Cypress.env('PASSWORD')}`);
      cy.wait(500)
    })
    it.only("Mocking",()=>{
        //changing the content of POST request depending on its body values
        cy.intercept("POST","https://www.kaggle.com/api/i/users.RecentlyViewedService/GetRecentlyViewedItems",(req)=>{
            if (req.body.returnedType==='VIEWED'){
                req.reply({
                    "recentlyViewedItems": [
                        {
                            "title": "Grand Theft Auto V",
                            "url": "/datasets/noahx1/grand-theft-auto-v",
                            "itemType": "DATASET",
                            "authorSlug": "/noahx1",
                            "mostRecentView": "2024-03-17T17:23:54Z",
                            "thumbnailUrl": "https://storage.googleapis.com/kaggle-datasets-images/4387661/7533339/6e5fc9c16320e83821cc2494a380cee5/dataset-thumbnail.jpg?t=2024-02-01-19-54-36",
                            "id": 4387661
                        }
                    ]
                })
            }
            if (req.body.returnedType==='EDITED') req.reply({
                "recentlyViewedItems": [
                    {
                        "title": "notebook0926c30c7f",
                        "url": "/code/testhillel/notebook0926c30c7f",
                        "itemType": "KERNEL",
                        "authorSlug": "/testhillel",
                        "mostRecentView": "2024-03-23T15:45:21Z",
                        "thumbnailUrl": "https://storage.googleapis.com/kaggle-avatars/thumbnails/default-thumb.png",
                        "id": 53254100
                    }
                ]
            })
        })
        cy.visit("https://www.kaggle.com/")
  })
  })