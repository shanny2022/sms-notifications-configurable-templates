const Template = require('../models/template');
const { sendSMS } = require('../utils/smsService');

// Create a new SMS template
exports.createTemplate = async (req, res) => {
    try {
        const { name, content } = req.body;
        const template = new Template({ name, content });
        await template.save();
        res.status(201).json({ message: 'Template created', template });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Send SMS using a template
exports.sendSMS = async (req, res) => {
    try {
        const { templateId, recipients, placeholders } = req.body;
        const template = await Template.findById(templateId);
        if (!template) {
            return res.status(404).json({ message: 'Template not found' });
        }
        await sendSMS(template.content, recipients, placeholders);
        res.status(200).json({ message: 'SMS sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
