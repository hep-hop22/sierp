Ext.require(['MSIERP.view.perfil.Combo']);

Ext.define('MSIERP.view.usuario.Edit', {
    //extend: 'Ext.window.Window',
    extend: 'MSIERP.view.AbstractForm',        
    alias : 'widget.usuarioEdit',
    title : 'Edição de Usuário',
    initComponent: function() {
    	
        this.items = [{
            xtype: 'form',
            border: false,
            fieldDefaults: {
                anchor: '100%',
                labelWidth: 140,
                labelAlign: 'right',
                allowBlank: false,                
                width : 450,
                combineErrors: false,
                msgTarget: 'side'
            },
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                name : 'cpf',
                ref: 'cpf',
                fieldLabel: 'CPF',
                allowBlank: false
            },{
                xtype: 'textfield',
                name : 'nomeUsuario',
                ref: 'nomeUsuario',
                fieldLabel: 'Nome',
                allowBlank: false                
            },{
                xtype: 'textfield',
                name : 'emailUsuario',
                ref: 'emailUsuario',
                fieldLabel: 'E-mail',
                allowBlank: false          
            }, {
                xtype : 'textfield',
                fieldLabel : 'Senha',
                name : 'senhaUsuario',
                id : 'senhaUsuario',
                vtype : 'password',
                inputType : 'password',
                allowBlank : false
            }, {
                xtype : 'textfield',
                fieldLabel : 'Confirme a Senha',
                inputType : 'password',
                name : 'confSenhaUsuario',
                vtype : 'password',
                initialPasswordField : 'senhaUsuario',
                allowBlank : false
            },{
                xtype: 'tipoPerfilUsuarioCombo'
            },{
                xtype: 'fieldcontainer',
                fieldLabel: 'Ativo',
                defaultType: 'checkboxfield',
                items: [
                    {
                        name      : 'stAtivo',
                        inputValue: true,
                        checked   : true,
                        id        : 'stAtivo'
                    }
               ]}
            ]}
        ];

        this.buttons = [{
            text: 'Salvar',
            action: 'save',
            iconCls: 'save'
        },
        {
            text: 'Cancelar',
            scope: this,
            iconCls: 'cancel',
            handler: this.close
        }];

        this.callParent(arguments);
    }    

});