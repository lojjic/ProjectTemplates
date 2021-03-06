/*
 * File: app/view/FormPanel.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.FormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formpanel',

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Edit Task',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Description',
                        labelWidth: '35%',
                        name: 'description'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Priority',
                        labelWidth: '35%',
                        name: 'priority',
                        options: [
                            'Hight',
                            'Normal',
                            'Low'
                        ]
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Due Date',
                        labelWidth: '35%',
                        name: 'dueDate'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'saveButton',
                margin: 10,
                text: 'Save'
            }
        ]
    }

});