exports.valid = function validDomain(domain) {
  console.log(`is domain '${domain}' valid?`)

  const [tld='', name='', ...subs] = domain.split('.').reverse()
  const allParts = [tld, name].concat(subs)
  const allDomains = allParts.slice(1)
  const validTLDChars = /^[a-zA-Z0-9]+$/
  const validDomainChars = /^[a-zA-Z0-9-]+$/

  const checks = [
    // none start with a hyphen
    !allParts.some(part => part.startsWith('-')),

    // TLD has valid characters
    validTLDChars.test(tld),

    // all domains have valid characters
    allDomains.every(part => validDomainChars.test(part)),

    // TLD and sub domains have a valid length
    [tld].concat(subs).every(part => part.length > 0),

    // domain name has a valid length
    name.length >= 3
  ]
  const valid = checks.every(valid => valid)

  console.log(`'${domain}' ${valid ? 'is' : 'is not'} a valid domain`)

  return valid
}
