export const type_check =
{
    if: {
        properties: { code: { const: 'type' } },
    },
    then: {
        properties: {
            list: {
                items: {
                    properties: {
                        value: {
                            type: 'string',
                            enum: ['custom_menu', 'variant_group', 'custom_group', 'category'],
                        },
                    },
                },
            },
        },
    },
}


export const np_fees_check = {
    if: {
        properties: { code: { const: 'np_fees' } },
    },
    then: {
        properties: {
            list: {
                items: [
                    {
                        type: 'object',
                        properties: {
                            code: { const: 'channel_margin_type' },
                            value: {
                                type: 'string',
                                enum: ['percent', 'amount'],
                            },
                        },
                        errorMessage: {
                            required: {
                                code: "list must have 'code' set to 'channel_margin_type'.",
                                value: "list must have a valid 'value' i.e. 'percent' or 'amount'.",
                            },
                        },
                        required: ['code', 'value'],
                    },
                    {
                        type: 'object',
                        properties: {
                            code: { const: 'channel_margin_value' },
                            value: {
                                type: 'string',
                                pattern: '^(?:[1-9]\\d*|0)?(?:\\.\\d{1,2})?$',
                            },
                        },
                        errorMessage: {
                            required: {
                                code: "list must have 'code' set to 'channel_margin_value'.",
                                value: "list must have a 'value' with a +ve number upto 2 decimal",
                            },
                        },
                        required: ['code', 'value'],
                    },
                ]
            },
        },
    },
    errorMessage: {
        properties: {
            value: `If 'code' is 'np_fees', 'list.code' must be one of 'channel_margin_type' or 'channel_margin_value'`,
        },
    },
}