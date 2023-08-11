export const copyToClipboard = (textToCopy, setCopied) => {
  navigator.clipboard.writeText(textToCopy);
  setCopied(true);

  // Hide the "Copied" message after 2 seconds
  setTimeout(() => {
    setCopied(false);
  }, 2500);
};
