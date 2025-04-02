# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 10.x.x  | :white_check_mark: |
| 9.x.x   | :white_check_mark: |
| < 9.0.0 | :x:                |

## Reporting a Vulnerability

The Saleh eChef team and community take security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

To report a security issue, please use the GitHub Security Advisory ["Report a Vulnerability"](https://github.com/gchq/Saleh eChef/security/advisories/new) tab.

The Saleh eChef team will send a response indicating the next steps in handling your report. After the initial reply to your report, the security team will keep you informed of the progress towards a fix and full announcement, and may ask for additional information or guidance.

## Security Considerations

Saleh eChef operates entirely client-side and does not send your data to any servers. However, users should be aware of the following security considerations:

1. **Browser Extensions**: Browser extensions can potentially access data being processed in Saleh eChef.
2. **Local Storage**: Some settings are saved in your browser's local storage.
3. **Input Validation**: Saleh eChef attempts to handle malformed input gracefully, but certain operations may behave unexpectedly with malicious input.
4. **Third-party Libraries**: Saleh eChef uses various third-party libraries which may have their own security considerations.

## Security Best Practices for Saleh eChef Users

1. Use the latest version of Saleh eChef
2. For highly sensitive data, consider using the offline version
3. Keep your browser and operating system updated
4. Be cautious when processing files from untrusted sources
