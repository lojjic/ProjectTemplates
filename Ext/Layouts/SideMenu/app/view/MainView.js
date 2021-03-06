/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.container.Viewport',

    itemId: 'mainView',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 100,
                    itemId: 'headerPanel',
                    layout: {
                        type: 'fit'
                    },
                    title: 'Header'
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    border: '0 2 0 0',
                    itemId: 'menuPanel',
                    width: 150,
                    bodyBorder: false,
                    collapseDirection: 'left',
                    collapsible: true,
                    title: 'Menu',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'sideMenu',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    text: 'Menu Item'
                                },
                                {
                                    xtype: 'menuitem',
                                    text: 'Menu Item'
                                },
                                {
                                    xtype: 'menuitem',
                                    text: 'Menu Item'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    split: true,
                    itemId: 'contentPanel',
                    title: 'Content'
                }
            ]
        });

        me.callParent(arguments);
    }

});