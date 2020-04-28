import qrcode


def is_secure(link: str) -> bool:
    if link.startswith('https://') or link.startswith('http://'):
        return True
    else:
        return False


def create_qr(link):
    if is_secure(link):
        image = qrcode.make(link)
        return image
    return None
