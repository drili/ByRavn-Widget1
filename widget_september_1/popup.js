// document.getElementById("button").addEventListener('click', () => {
//
// });

function applyBackgroundIfConditionsMet() {
    var bagsidenXPath = "//span[text()[contains(.,'_Tekst på bagsiden')]]";
    var bagsidenElement = document.evaluate(bagsidenXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (bagsidenElement) {
        var bagsidenImagesDiv = bagsidenElement.closest('div.Polaris-InlineStack').querySelector('div > p > img');

        var forsidenXPath = "//span[text()[contains(.,'_Tekst på forsiden')]]";
        var forsidenElement = document.evaluate(forsidenXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (forsidenElement) {
            var forsidenContentDiv = forsidenElement.closest('div.Polaris-InlineStack').querySelector('div');

            if (!forsidenContentDiv.hasChildNodes() && bagsidenImagesDiv) {
                bagsidenElement.style.background = '#ff9800';
                console.log('Applied orange background to "_Tekst på bagsiden" because "_Tekst på forsiden" is empty and images are present in "_Tekst på bagsiden".');
            }
        }
    }

    // *** Hide elements
    var hideElement1 = "//span[text()[contains(.,'_Tekst på forsiden')]]";
    var hideElement1Node = document.evaluate(hideElement1, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (hideElement1Node) {
        hideElement1Node.style.display = "none";
    }

    var inlineStacks = document.querySelectorAll('.Polaris-InlineStack'); 
    inlineStacks.forEach(function(stack) {
        var containsForside = stack.querySelector('span') && stack.querySelector('span').textContent.includes('Forside:');
        var containsText = stack.querySelector('p') && stack.querySelector('p').textContent.includes('Vælg populær tekst');

        if (containsForside && containsText) {
            stack.style.display = 'none';
        }

        var containsBagside = stack.querySelector('span') && stack.querySelector('span').textContent.includes('Bagside:');
        var containsTextBagside = stack.querySelector('p') && stack.querySelector('p').textContent.includes('Skriv din egen tekst');

        if (containsBagside && containsTextBagside) {
            stack.style.display = 'none';
        }

        var containsDinBagside = stack.querySelector('span') && stack.querySelector('span').textContent.includes('Din tekst på bagsiden');

        if (containsDinBagside) {
            stack.style.display = 'none';
        }
    });

    // *** Move forsiden to top.
    var spanElements = document.querySelectorAll("span.Polaris-Text--root.Polaris-Text--bodyMd.Polaris-Text--subdued");
    spanElements.forEach(function(spanElement) {
        if (spanElement.textContent.trim() === 'Tekst på forsiden:') {
            
            var attributeRow = spanElement.closest('._AttributeRow_2u7z6_14');
            
            var blockStack = attributeRow.closest('.Polaris-BlockStack');
            
            if (blockStack && attributeRow) {
                blockStack.insertBefore(attributeRow, blockStack.firstChild);
            }
        }
    });
}

function myFunction() {
    console.log("ran ByRavn Extension 6");
    setTimeout(function () {
        applyBackgroundIfConditionsMet();

        // Highlight quantity
        const quantityDiv = document.querySelectorAll('div._QuantityByPrice_ul3qw_20');
        
        quantityDiv.forEach(quantityDiv => {
            const quantityText = quantityDiv.textContent.split('×')[1].trim();

            const quantity = parseInt(quantityText, 10);

            if (quantity > 1) {
                quantityDiv.classList.add('highlight-quantity');
                quantityDiv.style.color = "red";
            } else {
                quantityDiv.classList.add('not-highlight-quantity');
                // quantityDiv.style.color = "green";
            }
        })


        const quantityDivDiscount = document.querySelectorAll('div._DiscountedPrice_ul3qw_10');

        if (quantityDivDiscount) {
            quantityDivDiscount.forEach(quantityDivDiscount => {
                const quantityText = quantityDivDiscount.textContent.split('×')[1].trim();
    
                const quantity = parseInt(quantityText, 10);
    
                if (quantity > 1) {
                    quantityDivDiscount.classList.add('highlight-quantity');
                    quantityDivDiscount.style.color = "red";
                } else {
                    quantityDivDiscount.classList.add('not-highlight-quantity');
                    // quantityDivDiscount.style.color = "green";
                }
            })
        }
        
        // Symbol _ changes
        var xElement = document.querySelectorAll("[src*='Symbol-_']");
        for (var i = 0; i < xElement.length; i++) {
            xElement[i].style.borderBottom = "1px solid red";
            xElement[i].style.paddingRight = "10px";
            xElement[i].style.marginRight = "0px";
            xElement[i].style.marginLeft = "0px";
            // console.log(xElement[i]);
        }
        // Symbol taendstik"mand" changes
        var xElementMand = document.querySelectorAll("[src*='Symbol-Taendstikmand']");
        for (var i = 0; i < xElementMand.length; i++) {
            xElementMand[i].style.backgroundColor = "lightblue";
            // console.log(xElementMand[i]);
        }
        // Symbol taendstik"mand2" changes
        var xElementMand2 = document.querySelectorAll("[src*='Symbol--Taendstikmand']");
        for (var i = 0; i < xElementMand2.length; i++) {
            xElementMand2[i].style.backgroundColor = "lightblue";
            // console.log(xElementMand[i]);
        }
        // Symbol Taendstikdame changes
        var xSymbolTaendstikdame = document.querySelectorAll("[src*='Symbol-Taendstikdame']");
        for (var i = 0; i < xSymbolTaendstikdame.length; i++) {
            xSymbolTaendstikdame[i].style.backgroundColor = "pink";
            // console.log(xElementDreng[i]);
        }
        // Symbol Taendstikdame2 changes
        var xSymbolTaendstikdame2 = document.querySelectorAll("[src*='Symbol--Taendstikdame']");
        for (var i = 0; i < xSymbolTaendstikdame2.length; i++) {
            xSymbolTaendstikdame2[i].style.backgroundColor = "pink";
            // console.log(xElementDreng[i]);
        }

        // // Symbol Taendstikpige changes
        // var xSymbolTaendstikpige = document.querySelectorAll("[src*='Symbol-Taendstikpige']");
        // for (var i = 0; i < xSymbolTaendstikpige.length; i++) {
        //      xSymbolTaendstikpige[i].style.backgroundColor = "indianred";
        //      // console.log(xElementDreng[i]);
        // }
        // // Symbol Taendstikpige2 changes
        // var xSymbolTaendstikpige2 = document.querySelectorAll("[src*='Symbol--Taendstikpige']");
        // for (var i = 0; i < xSymbolTaendstikpige2.length; i++) {
        //      xSymbolTaendstikpige2[i].style.backgroundColor = "indianred";
        //      // console.log(xElementDreng[i]);
        // }
        // // Symbol taendstik"dreng" changes
        // var xElementDreng = document.querySelectorAll("[src*='Symbol-Taendstikdreng']");
        // for (var i = 0; i < xElementDreng.length; i++) {
        //      xElementDreng[i].style.backgroundColor = "cyan";
        //      // console.log(xElementDreng[i]);
        // }
        // // Symbol taendstik"dreng2" changes
        // var xElementDreng2 = document.querySelectorAll("[src*='Symbol--Taendstikdreng']");
        // for (var i = 0; i < xElementDreng2.length; i++) {
        //      xElementDreng2[i].style.backgroundColor = "cyan";
        //      // console.log(xElementDreng[i]);
        // }
    }, 2000);



    javascript: (function () {


        ///////////
        /* Markerer antal med RØD hvis > 2 */
        function setStyleUsingXPath(xpath, style) {
            const elements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let i = 0; i < elements.snapshotLength; i++) {
                const element = elements.snapshotItem(i);
                const lastChar = element.textContent.trim().slice(-1); // Get the last character of the text content
                if (!isNaN(lastChar) && +lastChar > 1) { // Check if the last character is a number and > 1
                    element.style.color = style;
                }
            }
        }

        setInterval(function () {
            const xpathExpression = "//ul/li/div/div[2]/div/div[2]/div";
            setStyleUsingXPath(xpathExpression, 'red');
        }, 1000);
        ///////////



        // DK SHOP
        if (window.location.href.indexOf("admin.shopify.com/store/byravn/") >= 0) {
            console.log("ByRavn Chrome Ext. DK")

            setInterval(function () {
                var xpath = "//span[text()='_Tekst på forsiden:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }



                var xpath = "//span[text()='_Tekst på bagsiden:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }

                var xpath = "//span[text()='_Tekst på bagsiden (præges på én linje):']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }

                var xpath = "//span[text()='_Tekst på forsiden (præges på én linje):']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }

                var xpath = "//span[text()='Bagside:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var xpath = "//span[text()='Forside:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var xpath = "//span[text()='Din tekst på bagsiden']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var xpath = "//span[text()='Din tekst på forsiden']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var movepath = "//span[text()='_Tekst på bagsiden::']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
                }

                var movepath = "//span[text()='Tekst på bagsiden:']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
                }

                var movepath = "//span[text()='Tekst på forsiden:']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '1';
                }

                var movepath = "//span[text()='Tekst på forsiden:']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.cssText = 'display: flex; flex-direction: column;';
                }

                var colorpath = "//span[text()[contains(.,'Med tekst på for- og bagsiden')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.style.background = '#a8c6fe';
                }

                var colorpath = "//span[text()[contains(.,'Med tekst på forsiden')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //matchingElement.style.background='#cce8b5';
                }

                var colorpath = "//span[text()[contains(.,'Med tekst på bagsiden')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.style.background = '#ffe4a8';
                }

                var colorpath = "//span[text()[contains(.,'_Indpakning')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.style.background = '#ffdad8';
                }

                var colorpath = "//span[text()[contains(.,'Indpakning')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.style.background = '#ffdad8';
                }

                /*OLD STUFF HERE*/

                var headings = document.evaluate("//p[contains(., '.png')]", document, null, XPathResult.ANY_TYPE, null);
                if (headings) {
                    var div = headings.iterateNext();
                    if (div) {
                        var getProdImgUrls = div.innerText;
                        var imagesUrlArray = getProdImgUrls.split('|');
                        var setProdImgUrls = "";

                        imagesUrlArray.forEach(function (src) {
                            setProdImgUrls += '<img src="' + src.trim() + '" style="vertical-align:bottom;display:inline" />';
                        });

                        div.innerHTML = setProdImgUrls;
                    }
                }

            }, 1000);

        }
        // DK SHOP - END

        // SE SHOP
        if (window.location.href.indexOf("admin.shopify.com/store/byravn-se") >= 0) {
            //alert("SE!");
            console.log("ByRavn Chrome Ext. SE")

            setInterval(function () {
                var xpath = "//span[text()='_Text på framsidan:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }



                var xpath = "//span[text()='_Text på baksidan:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }

                var xpath = "//span[text()='_Tekst på bagsiden (præges på én linje):']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }

                var xpath = "//span[text()='_Tekst på forsiden (præges på én linje):']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.remove();
                }

                var xpath = "//span[text()='Baksida:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var xpath = "//span[text()='Framsida:']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var xpath = "//span[text()='Din text på baksidan']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var xpath = "//span[text()='Text på insidan']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var xpath = "//span[text()='Text på utsidan']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }


                var xpath = "//p[text()='Skriv din egen text']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }




                var xpath = "//span[text()='Din text på framsidan']";
                var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    //  matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                }

                var movepath = "//span[text()='_Text på baksidan::']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
                }

                var movepath = "//span[text()='Text på baksidan:']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
                }

                var movepath = "//span[text()='Text på framsidan:']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '1';
                }

                var movepath = "//span[text()='Baksida :']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
                }

                var movepath = "//span[text()='Text på framsidan:']";
                var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.cssText = 'display: flex; flex-direction: column;';
                }

                var colorpath = "//span[text()[contains(.,'Med text på fram- och baksidan')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.parentNode.style.background = '#b9efcf';
                }

                var colorpath = "//span[text()[contains(.,'Med tekst på forsiden')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                //matchingElement.style.background='#cce8b5';
                if (matchingElement) {
                }

                var colorpath = "//span[text()[contains(.,'Med tekst på bagsiden')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.style.background = '#ffe4a8';
                }

                var colorpath = "//span[text()[contains(.,'_Indpakning')]]";
                var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (matchingElement) {
                    matchingElement.style.background = '#ffdad8';
                }

                /*OLD STUFF HERE*/

                var headings = document.evaluate("//p[contains(., '.png')]", document, null, XPathResult.ANY_TYPE, null);
                if (headings) {
                    var div = headings.iterateNext();
                    if (div) {
                        var getProdImgUrls = div.innerText;
                        var imagesUrlArray = getProdImgUrls.split('|');
                        var setProdImgUrls = "";

                        imagesUrlArray.forEach(function (src) {
                            setProdImgUrls += '<img src="' + src.trim() + '" style="vertical-align:bottom;display:inline" />';
                        });

                        div.innerHTML = setProdImgUrls;
                    }
                }
            }, 1000);

        }
        // SE SHOP - END

        // NO SHOP
        if (window.location.href.indexOf("admin.shopify.com/store/byravn-no") >= 0) {
            console.log("ByRavn Chrome Ext. NO")


            var xpath = "//span[text()='_Text på framsiden:']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.remove();
            }



            var xpath = "//span[text()='_Text på baksiden:']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.remove();
            }

            var xpath = "//span[text()='_Tekst på bagsiden (præges på én linje):']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.remove();
            }

            var xpath = "//span[text()='_Tekst på forsiden (præges på én linje):']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.remove();
            }

            var xpath = "//span[text()='Bakside:']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }

            var xpath = "//span[text()='Framside:']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }

            var xpath = "//span[text()='Din text på baksiden']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }

            var xpath = "//span[text()='Text på insiden']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }

            var xpath = "//span[text()='Text på utsiden']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }


            var xpath = "//p[text()='Skriv din egen tekst']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }


            var xpath = "//span[text()='Teksten din på baksiden']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }



            var xpath = "//span[text()='Teksten din på forsiden']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                // matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            }

            var movepath = "//span[text()='_Tekst på baksiden::']";
            var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
            }

            var movepath = "//span[text()='Tekst på baksiden:']";
            var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
            }

            var movepath = "//span[text()='Tekst på framsiden:']";
            var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '1';
            }

            var movepath = "//span[text()='Bakside :']";
            var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.style.order = '2';
            }

            var movepath = "//span[text()='Tekst på framsiden:']";
            var matchingElement = document.evaluate(movepath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.cssText = 'display: flex; flex-direction: column;';
            }

            var colorpath = "//span[text()[contains(.,'Med tekst på fram- og baksiden')]]";
            var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.parentNode.style.background = '#b9efcf';
            }

            var colorpath = "//span[text()[contains(.,'Med tekst på forsiden')]]";
            var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            //matchingElement.style.background='#cce8b5';
            if (matchingElement) {
            }

            var colorpath = "//span[text()[contains(.,'Med tekst på bagsiden')]]";
            var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.style.background = '#ffe4a8';
            }

            var colorpath = "//span[text()[contains(.,'_Indnakning')]]";
            var matchingElement = document.evaluate(colorpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (matchingElement) {
                matchingElement.style.background = '#ffdad8';
            }

            /*OLD STUFF HERE*/

            var headings = document.evaluate("//p[contains(., '.png')]", document, null, XPathResult.ANY_TYPE, null);
            if (headings) {
                var div = headings.iterateNext();
                if (div) {
                    var getProdImgUrls = div.innerText;
                    var imagesUrlArray = getProdImgUrls.split('|');
                    var setProdImgUrls = "";

                    imagesUrlArray.forEach(function (src) {
                        setProdImgUrls += '<img src="' + src.trim() + '" style="vertical-align:bottom;display:inline" />';
                    });

                    div.innerHTML = setProdImgUrls;
                }
            }

        }
        // NO SHOP - END



    })();

    // console.log(document.body);
    // return document.body.innerHTML;
}

//We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
// chrome.tabs.executeScript({
//    code: '(' + myFunction + ')();' //argument here is a string but function.toString() returns function's code
// }, (results) => {
//    //Here we have just the innerHTML and not DOM structure
//    console.log('Popup script:')
//    console.log(results[0]);
// });

function checkExistsClass() {
    var xNumber = 0;
    var checkExist = setInterval(function () {
        // console.log(xNumber);
        var classPolaris = document.getElementsByClassName('assetSymbolsClass');
        if (xNumber > 20) {
            console.log(xNumber);
            console.log("xNumber === 10");
            clearInterval(checkExist);
        } else {
            xNumber++;
            if (classPolaris.length == 0) {
                setTimeout(() => {
                    myFunction();
                    console.log("Exists!");
                    clearInterval(checkExist);
                }, 500)
            }
        }
    }, 500);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
        console.log(`::: URL: ${document.location.href}`);

        if (document.location.href.includes("/orders/")) {
            console.log("::: ORDERS detected");

            if (document.readyState === 'loading') {
                window.addEventListener('DOMContentLoaded', function () {
                    console.log("::: ORDERS (DOMContentLoaded)");
                    checkExistsClass();
                });
            } else {
                // Document already loaded, execute immediately
                checkExistsClass();
                myFunction();
                console.log("::: Executed myFunction immediately!");
            }

            setTimeout(() => {
                checkExistsClass();
                myFunction();
                console.log("::: Executed myFunction after timeout!");
            }, 1000);
        }
    }
});
